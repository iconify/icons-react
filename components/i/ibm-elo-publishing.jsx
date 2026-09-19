import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqdqqi13i.css';
import '../../css/a/a3y0hhb5m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqdqqi13i"/><path class="a3y0hhb5m"/>`,
		"fallback": "carbon:ibm-elo-publishing",
	});
}

export default Component;
