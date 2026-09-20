import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_5l8lb9a.css';
import '../../css/i/io3w-rbsf.css';
import '../../css/g/g7_albbtb.css';
import '../../css/v/v415fabhh.css';
import '../../css/o/o83e2bcbr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_5l8lb9a"/><path class="io3w-rbsf"/><circle class="g7_albbtb"/><path class="v415fabhh"/><path class="o83e2bcbr"/>`,
		"fallback": "openmoji:first-quarter-moon-face",
	});
}

export default Component;
