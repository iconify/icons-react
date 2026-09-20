import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/sybczbbpf.css';
import '../../css/u/uw18y9boo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="sybczbbpf"/><path class="uw18y9boo"/></g>`,
		"fallback": "lsicon:comments-outline",
	});
}

export default Component;
