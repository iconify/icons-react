import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekcncrbve.css';
import '../../css/g/gsr7vebbv.css';
import '../../css/w/wz2vvsaic.css';
import '../../css/g/gcmpo3b6i.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ekcncrbve"/><path clip-rule="evenodd" class="gsr7vebbv"/><path class="wz2vvsaic"/><path clip-rule="evenodd" class="gcmpo3b6i"/></g>`,
		"fallback": "flagpack:cc",
	});
}

export default Component;
