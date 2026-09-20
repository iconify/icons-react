import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k1nqlebzx.css';
import '../../css/l/l7s-_pmfh.css';
import '../../css/m/mol5dxbvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k1nqlebzx"/><path class="l7s-_pmfh"/><path class="mol5dxbvp"/></g>`,
		"fallback": "streamline-freehand:controls-volume-knob",
	});
}

export default Component;
