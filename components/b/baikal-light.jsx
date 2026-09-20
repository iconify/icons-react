import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf63vxpfw.css';
import '../../css/h/hngcoxbkk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf63vxpfw"/><path class="hngcoxbkk"/>`,
		"fallback": "selfhst:baikal-light",
	});
}

export default Component;
