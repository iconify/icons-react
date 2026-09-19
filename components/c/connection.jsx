import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rby7vyvff.css';
import '../../css/g/gkws3_7ir.css';
import '../../css/z/z6uqbqdji.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="rby7vyvff"/><path class="gkws3_7ir"/><path class="z6uqbqdji"/></g>`,
		"fallback": "icon-park-outline:connection",
	});
}

export default Component;
