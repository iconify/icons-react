import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oupseqp3w.css';
import '../../css/g/g_ko1zbyv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oupseqp3w"/><path class="g_ko1zbyv"/>`,
		"fallback": "carbon:cell-tower",
	});
}

export default Component;
