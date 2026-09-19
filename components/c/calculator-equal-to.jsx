import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owagtkbsz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owagtkbsz"/>`,
		"fallback": "fluent-mdl2:calculator-equal-to",
	});
}

export default Component;
