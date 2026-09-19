import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdr-j5q6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fdr-j5q6b"/>`,
		"fallback": "griddy-icons:cow-filled",
	});
}

export default Component;
