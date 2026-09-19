import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_6x1nbxh.css';
import '../../css/k/k18y-k1ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_6x1nbxh"/><path class="k18y-k1ul"/>`,
		"fallback": "circum:circle-chev-left",
	});
}

export default Component;
