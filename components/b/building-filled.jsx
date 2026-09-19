import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv3lywbkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zv3lywbkd"/>`,
		"fallback": "griddy-icons:building-filled",
	});
}

export default Component;
