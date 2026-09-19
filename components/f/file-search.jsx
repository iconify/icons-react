import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0szj744u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m0szj744u"/>`,
		"fallback": "griddy-icons:file-search",
	});
}

export default Component;
