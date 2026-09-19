import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1ebpz8ix.css';

const viewBox = {"width":470,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1ebpz8ix"/>`,
		"fallback": "file-icons:dyalog",
	});
}

export default Component;
