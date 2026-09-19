import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa52w5bpt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa52w5bpt"/>`,
		"fallback": "file-icons:curry",
	});
}

export default Component;
