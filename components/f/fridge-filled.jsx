import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm301m7yg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mm301m7yg"/>`,
		"fallback": "reicon:fridge-filled",
	});
}

export default Component;
