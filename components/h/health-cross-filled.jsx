import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vctecjbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vctecjbfy"/>`,
		"fallback": "griddy-icons:health-cross-filled",
	});
}

export default Component;
