import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tu6e87bqm.css';
import '../../css/v/vult_kbxs.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tu6e87bqm"/><path class="vult_kbxs"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:hammer-claw-circle",
	});
}

export default Component;
