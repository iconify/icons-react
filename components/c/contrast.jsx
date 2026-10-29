import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqhi_415b.css';
import '../../css/m/m5tofki6k.css';
import '../../css/b/bv6wucbyg.css';
import '../../css/c/chaaqcc_c.css';
import '../../css/m/mxpsyukzm.css';
import '../../css/h/h44b7nxuh.css';
import '../../css/u/u8fg7absb.css';
import '../../css/z/z9zpaqb2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow yqhi_415b"/><path class="m5tofki6k wm-k"/><path class="bv6wucbyg wm-k"/><path class="chaaqcc_c wm-a"/><path class="mxpsyukzm wm-a"/><path class="h44b7nxuh wm-a"/><path class="u8fg7absb wm-a"/><path class="wm-a z9zpaqb2s"/>`,
		"fallback": "withicons-pastel:contrast",
	});
}

export default Component;
