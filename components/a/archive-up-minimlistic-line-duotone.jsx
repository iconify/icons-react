import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k68rhdcnr.css';
import '../../css/k/k99btubkh.css';
import '../../css/l/lamw8tlou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="k68rhdcnr"/><path class="k99btubkh"/><path class="lamw8tlou"/></g>`,
		"fallback": "solar:archive-up-minimlistic-line-duotone",
	});
}

export default Component;
