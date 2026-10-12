import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa_--1afw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aa_--1afw"/>`,
		"fallback": "lucide-extended:circle-chevron-left-filled",
	});
}

export default Component;
