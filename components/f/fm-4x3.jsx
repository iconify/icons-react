import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkszfzb9n.css';
import '../../css/n/nv9qcacyl.css';
import '../../css/v/vu-88_bmr.css';
import '../../css/z/zn9txewhb.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGGkFDRddX"><path class="mkszfzb9n"/></clipPath></defs><g clip-path="url(#SVGGkFDRddX)" transform="translate(76.3)scale(.94)" class="nv9qcacyl"><path class="vu-88_bmr"/><path class="zn9txewhb"/></g>`,
		"fallback": "flag:fm-4x3",
	});
}

export default Component;
