import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qni1xrfrz.css';
import '../../css/g/gl7wtsb_j.css';
import '../../css/q/qkkqlmbab.css';
import '../../css/f/f5vnnmw2g.css';
import '../../css/n/nzvhm2bhf.css';
import '../../css/a/al749zbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qni1xrfrz wm-shadow"/><path class="gl7wtsb_j wm-shadow"/><path class="qkkqlmbab"/><path class="f5vnnmw2g"/><path class="nzvhm2bhf"/><path class="al749zbrb"/></g>`,
		"fallback": "withicons-brutal:git-branch",
	});
}

export default Component;
