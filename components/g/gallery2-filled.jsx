import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chhvm5r4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="chhvm5r4b"/>`,
		"fallback": "reicon:gallery2-filled",
	});
}

export default Component;
