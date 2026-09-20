import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpc22hbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpc22hbyu"/>`,
		"fallback": "si:flow-tree-fill",
	});
}

export default Component;
