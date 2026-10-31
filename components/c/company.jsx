import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qzt-q2b7o.css';
import '../../css/i/ibmoakd6a.css';
import '../../css/t/tuvzb2bfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qzt-q2b7o"/><path class="ibmoakd6a"/><path class="tuvzb2bfr"/></g>`,
		"fallback": "struq:company",
	});
}

export default Component;
