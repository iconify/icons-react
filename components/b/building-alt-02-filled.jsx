import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl4vnpthx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bl4vnpthx"/>`,
		"fallback": "griddy-icons:building-alt-02-filled",
	});
}

export default Component;
