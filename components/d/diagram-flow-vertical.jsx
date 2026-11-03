import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pv46-z28m.css';
import '../../css/f/feh9g0bqf.css';
import '../../css/p/pvotryzei.css';
import '../../css/k/k41zy7q4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pv46-z28m"/><rect class="feh9g0bqf"/><rect class="pvotryzei"/><rect class="k41zy7q4s"/></g>`,
		"fallback": "lucide:diagram-flow-vertical",
	});
}

export default Component;
