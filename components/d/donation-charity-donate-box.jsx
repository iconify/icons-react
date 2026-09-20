import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/goxedu8-m.css';
import '../../css/q/qtdl2pk3h.css';
import '../../css/n/nnirq57eg.css';
import '../../css/d/daqja6rxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="goxedu8-m"/><path class="qtdl2pk3h"/><path class="nnirq57eg"/><path class="daqja6rxb"/></g>`,
		"fallback": "streamline-freehand-color:donation-charity-donate-box",
	});
}

export default Component;
