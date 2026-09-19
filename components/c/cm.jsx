import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jhjpckbvk.css';
import '../../css/e/ezvtrm6iz.css';
import '../../css/m/mg6lwxb5m.css';
import '../../css/q/qmdliab1a.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jhjpckbvk"/><path class="ezvtrm6iz"/><path class="mg6lwxb5m"/><path class="qmdliab1a"/></g>`,
		"fallback": "flagpack:cm",
	});
}

export default Component;
