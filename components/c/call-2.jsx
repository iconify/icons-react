import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk_enobxe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk_enobxe"/>`,
		"fallback": "subway:call-2",
	});
}

export default Component;
