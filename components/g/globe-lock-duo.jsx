import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/id2aypzrn.css';
import '../../css/b/btnlk1maf.css';
import '../../css/u/umvgb2fhw.css';
import '../../css/c/cn2f9dbpj.css';
import '../../css/o/oc96mnvuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="id2aypzrn"/><path class="btnlk1maf wm-s"/><path class="umvgb2fhw wm-s"/><path class="cn2f9dbpj"/><path class="oc96mnvuf wm-a"/></g>`,
		"fallback": "withicons:globe-lock-duo",
	});
}

export default Component;
