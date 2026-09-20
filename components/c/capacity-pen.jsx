import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq_tw-rby.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nq_tw-rby"/>`,
		"fallback": "ix:capacity-pen",
	});
}

export default Component;
