import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uxwj_xb5y.css';
import '../../css/z/zs13s_bpz.css';
import '../../css/x/xb15pwbqd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="uxwj_xb5y"/><circle class="zs13s_bpz"/><path class="xb15pwbqd"/></g>`,
		"fallback": "bytesize:eye",
	});
}

export default Component;
