import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/owqqlgi1l.css';
import '../../css/i/igu498kqw.css';
import '../../css/t/tt8fklbvo.css';
import '../../css/m/mf-3ce6ro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="owqqlgi1l"/><path class="igu498kqw"/><path class="tt8fklbvo"/><path class="mf-3ce6ro"/></g>`,
		"fallback": "withicons:armchair-duo",
	});
}

export default Component;
