import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdkwt1blo.css';
import '../../css/n/nokx56b6e.css';
import '../../css/h/hnnpaabfi.css';
import '../../css/j/j1j-j5bhn.css';
import '../../css/t/trcgv4bih.css';
import '../../css/d/d32q9ebdj.css';
import '../../css/b/brv7yfbes.css';
import '../../css/l/luqsjpb2l.css';
import '../../css/c/cyve6bbvn.css';
import '../../css/c/cz8ockb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGNAHnvbES" cx="9.95" cy="11.01" r="13.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="tdkwt1blo"/><stop offset=".24" class="nokx56b6e"/><stop offset=".66" class="nokx56b6e"/><stop offset="1" class="hnnpaabfi"/></radialGradient></defs><path class="j1j-j5bhn wm-shadow"/><path fill="url(#SVGNAHnvbES)" class="trcgv4bih wm-k"/><path class="d32q9ebdj wm-k"/><path class="brv7yfbes wm-a"/><path class="luqsjpb2l wm-a"/><path class="cyve6bbvn wm-shine"/><path class="cz8ockb9r wm-shine"/></g>`,
		"fallback": "withicons-rangoli:avatar-man-cap",
	});
}

export default Component;
