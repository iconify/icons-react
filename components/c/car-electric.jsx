import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/i5giqqahd.css';
import '../../css/q/q833gpbcf.css';
import '../../css/d/d4-ke6bbh.css';
import '../../css/n/n_i9t3l9h.css';
import '../../css/c/c71o25bkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="i5giqqahd"/><circle class="q833gpbcf"/><circle class="d4-ke6bbh"/><path class="n_i9t3l9h"/><path class="c71o25bkd"/></g>`,
		"fallback": "evicons:car-electric",
	});
}

export default Component;
