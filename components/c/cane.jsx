import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/svp_edbxz.css';
import '../../css/b/blf2vnb9u.css';
import '../../css/b/bnxhddcwu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="svp_edbxz"/><path class="blf2vnb9u"/><path class="bnxhddcwu"/></g>`,
		"fallback": "streamline:cane",
	});
}

export default Component;
