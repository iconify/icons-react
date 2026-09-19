import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvpe0elkl.css';
import '../../css/k/k3c3_wb5t.css';
import '../../css/w/wmdyppz_d.css';
import '../../css/q/qw34ubbdm.css';
import '../../css/m/m-7tuu_6k.css';
import '../../css/n/n7oppivbj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvpe0elkl"/><path class="k3c3_wb5t"/><path class="wmdyppz_d"/><path class="qw34ubbdm"/><path class="m-7tuu_6k"/><path class="n7oppivbj"/>`,
		"fallback": "fxemoji:dogside",
	});
}

export default Component;
