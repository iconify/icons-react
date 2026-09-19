import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cezurnb4k.css';
import '../../css/e/e25gc_mcv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cezurnb4k"/><path class="e25gc_mcv"/>`,
		"fallback": "carbon:calculator-check",
	});
}

export default Component;
