import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz4b90hlv.css';
import '../../css/h/hltafxbrk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz4b90hlv"/><path class="hltafxbrk"/>`,
		"fallback": "openmoji:anger-symbol",
	});
}

export default Component;
