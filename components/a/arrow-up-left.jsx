import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/z77c-8q-y.css';
import '../../css/i/i_k-a3bek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="z77c-8q-y"/><path class="i_k-a3bek"/></g>`,
		"fallback": "matita:arrow-up-left",
	});
}

export default Component;
