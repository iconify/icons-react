import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imb_zig2g.css';
import '../../css/r/ryy9mmbme.css';
import '../../css/e/e4l-knkmq.css';
import '../../css/d/drv08427l.css';
import '../../css/c/cpuyfc2bi.css';
import '../../css/c/c_ufkk1zq.css';
import '../../css/l/lcau_6b2n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imb_zig2g"/><path class="ryy9mmbme"/><path class="e4l-knkmq"/><path class="drv08427l"/><path class="cpuyfc2bi"/><path class="c_ufkk1zq"/><path class="lcau_6b2n"/>`,
		"fallback": "openmoji:boy-light-skin-tone",
	});
}

export default Component;
