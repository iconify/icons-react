import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k68rhdcnr.css';
import '../../css/k/k99btubkh.css';
import '../../css/z/zg9kb7r9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="k68rhdcnr"/><path class="k99btubkh"/><path class="zg9kb7r9r"/></g>`,
		"fallback": "solar:archive-down-minimlistic-line-duotone",
	});
}

export default Component;
