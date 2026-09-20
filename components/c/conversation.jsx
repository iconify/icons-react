import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub10_dwjt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ub10_dwjt"/>`,
		"fallback": "ix:conversation",
	});
}

export default Component;
