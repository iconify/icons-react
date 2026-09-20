import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n9mlm_otl.css';
import '../../css/d/d9oh6rbog.css';
import '../../css/c/cxnw3fbqh.css';
import '../../css/h/hjf31hb1d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n9mlm_otl"/><path class="d9oh6rbog"/><path class="cxnw3fbqh"/><path class="hjf31hb1d"/></g>`,
		"fallback": "streamline-color:city-hall-flat",
	});
}

export default Component;
