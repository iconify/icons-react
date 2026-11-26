import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/r/r8ef4ybdi.css';
import '../../css/z/z5aw3lmvg.css';
import '../../css/r/r3yau1b7h.css';
import '../../css/b/b18igy58o.css';
import '../../css/r/rvf-6-bar.css';
import '../../css/l/lsctz5bde.css';
import '../../css/f/f4zcitbui.css';
import '../../css/j/j5l6ch57e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGL2kEYcbn" cx="106.8" cy="67.8" r="116.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".28" class="r8ef4ybdi"/><stop offset=".85" class="z5aw3lmvg"/><stop offset="1" class="z5aw3lmvg"/></radialGradient></defs><g transform="matrix(2.7 0 0 2.7 -56.37 -28.44)"><path class="r3yau1b7h"/><path fill="url(#SVGL2kEYcbn)" class="b18igy58o"/><path class="rvf-6-bar"/><path class="lsctz5bde"/><path class="f4zcitbui"/><ellipse transform="rotate(-50 140 50)" class="j5l6ch57e"/></g>`,
		"fallback": "xero-emoji:feather",
	});
}

export default Component;
