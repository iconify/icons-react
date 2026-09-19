import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7w-pxplo.css';
import '../../css/i/iv1cdqgvk.css';
import '../../css/n/n7mqk6l-u.css';
import '../../css/t/tayf2v4-u.css';
import '../../css/k/k39_n0lox.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7w-pxplo"/><circle class="iv1cdqgvk"/><path class="n7mqk6l-u"/><circle class="tayf2v4-u"/><path class="k39_n0lox"/>`,
		"fallback": "carbon:ibm-event-streams",
	});
}

export default Component;
