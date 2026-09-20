import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjbj8lbqb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mjbj8lbqb"/>`,
		"fallback": "lsicon:contract-exclamation-filled",
	});
}

export default Component;
