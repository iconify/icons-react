import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx-_r7b2v.css';
import '../../css/v/vam_rybkj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx-_r7b2v"/><path class="vam_rybkj"/>`,
		"fallback": "cil:gradient",
	});
}

export default Component;
