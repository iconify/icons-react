import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8dna0b9r.css';
import '../../css/h/hgwl5bclr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8dna0b9r"/><path class="hgwl5bclr"/>`,
		"fallback": "carbon:ibm-z-processor-capacity-reference",
	});
}

export default Component;
