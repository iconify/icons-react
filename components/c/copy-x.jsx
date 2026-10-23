import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cao70dwyo.css';
import '../../css/i/ithbygbsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cao70dwyo"/><path class="ithbygbsg"/></g>`,
		"fallback": "vadivam:copy-x",
	});
}

export default Component;
