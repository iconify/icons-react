import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zr3aj01_m.css';
import '../../css/d/d2bzl5g0c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="zr3aj01_m"/><path class="d2bzl5g0c"/></g>`,
		"fallback": "icon-park-solid:bring-to-front-one",
	});
}

export default Component;
