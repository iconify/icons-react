import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0xbhesyu.css';
import '../../css/f/fouayebow.css';
import '../../css/s/soumptb5m.css';
import '../../css/w/wzd7dfbhf.css';
import '../../css/k/kef9-snwm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="d0xbhesyu"/><circle class="fouayebow"/><circle class="soumptb5m"/><path class="wzd7dfbhf"/><path class="kef9-snwm"/>`,
		"fallback": "openmoji:dotted-line-face",
	});
}

export default Component;
