import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nljul383u.css';
import '../../css/p/p-azaxkxl.css';
import '../../css/o/ovm5eicjs.css';
import '../../css/l/l6n_itbdd.css';
import '../../css/l/lxlvjeame.css';
import '../../css/b/b-cqvznzl.css';
import '../../css/k/kojojpdnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nljul383u"/><path class="p-azaxkxl"/><path class="ovm5eicjs"/><path class="l6n_itbdd"/><path class="lxlvjeame"/><path class="b-cqvznzl"/><path class="kojojpdnj"/></g>`,
		"fallback": "streamline-freehand-color:credit-card-payment",
	});
}

export default Component;
