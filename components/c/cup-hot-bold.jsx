import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6ld_jb7u.css';
import '../../css/e/e85_kpklm.css';
import '../../css/r/r2y9xybok.css';
import '../../css/l/l5limrb2k.css';
import '../../css/t/tpv95qpsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6ld_jb7u"/><path clip-rule="evenodd" class="e85_kpklm"/><path class="r2y9xybok"/><path class="l5limrb2k"/><path class="tpv95qpsr"/>`,
		"fallback": "solar:cup-hot-bold",
	});
}

export default Component;
