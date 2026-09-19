import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z98z3cbeg.css';
import '../../css/e/eqpfmcb_l.css';
import '../../css/e/evodjt3ga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z98z3cbeg"/><path class="eqpfmcb_l"/><path class="evodjt3ga"/></g>`,
		"fallback": "covid:graph-document-infected-report",
	});
}

export default Component;
