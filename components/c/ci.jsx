import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qqa_bcb1r.css';
import '../../css/l/lyeaxac2j.css';
import '../../css/p/pmz80t_au.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qqa_bcb1r"/><path class="lyeaxac2j"/><path class="pmz80t_au"/></g>`,
		"fallback": "flagpack:ci",
	});
}

export default Component;
