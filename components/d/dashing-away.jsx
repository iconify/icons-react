import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2w3uac9z.css';
import '../../css/e/edv2k_o8i.css';
import '../../css/e/eqoo6tulb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2w3uac9z"/><path class="edv2k_o8i"/><path class="eqoo6tulb"/>`,
		"fallback": "openmoji:dashing-away",
	});
}

export default Component;
