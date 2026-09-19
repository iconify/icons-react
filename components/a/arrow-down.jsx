import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zlv2tpb4e.css';
import '../../css/z/z3h29obsl.css';
import '../../css/m/m-mcntenk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zlv2tpb4e"/><path class="z3h29obsl"/><path class="m-mcntenk"/></g>`,
		"fallback": "pepicons:arrow-down",
	});
}

export default Component;
