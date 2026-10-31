import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_r5q0dsm.css';
import '../../css/a/asx311clm.css';
import '../../css/b/b92s40z-u.css';
import '../../css/x/xzv3zt58w.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_r5q0dsm"/><path class="asx311clm"/><path class="b92s40z-u"/><path class="xzv3zt58w"/>`,
		"fallback": "tabler-flags:guinea-bissau",
	});
}

export default Component;
