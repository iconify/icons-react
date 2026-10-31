import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l9aj60bsc.css';
import '../../css/i/io920uvxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="l9aj60bsc wm-k"/><path class="io920uvxo wm-a"/></g>`,
		"fallback": "withicons:air-vent-gloss",
	});
}

export default Component;
