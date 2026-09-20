import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/orfzfryhc.css';
import '../../css/p/p4-ierq8t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="orfzfryhc"/><path class="p4-ierq8t"/></g>`,
		"fallback": "streamline:eye-optic",
	});
}

export default Component;
