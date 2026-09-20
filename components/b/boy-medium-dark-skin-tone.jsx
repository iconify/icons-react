import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imb_zig2g.css';
import '../../css/u/u8eont9im.css';
import '../../css/u/um5_u2byc.css';
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
		"content": `<path class="imb_zig2g"/><path class="u8eont9im"/><path class="um5_u2byc"/><path class="drv08427l"/><path class="cpuyfc2bi"/><path class="c_ufkk1zq"/><path class="lcau_6b2n"/>`,
		"fallback": "openmoji:boy-medium-dark-skin-tone",
	});
}

export default Component;
