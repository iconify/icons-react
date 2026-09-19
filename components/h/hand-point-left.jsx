import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/keh4ghbcn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="keh4ghbcn"/>`,
		"fallback": "fa-regular:hand-point-left",
	});
}

export default Component;
