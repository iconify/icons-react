import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ehe-29bek.css';
import '../../css/p/prudicchg.css';
import '../../css/e/e3tzvnbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="ehe-29bek"/><rect class="prudicchg"/><path class="e3tzvnbfz"/></g>`,
		"fallback": "struq:calculator",
	});
}

export default Component;
