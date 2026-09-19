import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m9578d-af.css';
import '../../css/c/cfcg70bpk.css';
import '../../css/q/qijn7zboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m9578d-af"/><path class="cfcg70bpk"/><path class="qijn7zboq"/></g>`,
		"fallback": "hugeicons:ear-rings-02",
	});
}

export default Component;
