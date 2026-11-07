import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1i0wvbdv.css';
import '../../css/r/r8amylauc.css';
import '../../css/v/vq15xpb4s.css';
import '../../css/v/vwazgn8zx.css';
import '../../css/j/juytcbcuo.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/e/ermbv6b9l.css';
import '../../css/s/sats95d6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1i0wvbdv"/><path class="r8amylauc"/><path class="vq15xpb4s"/><path class="vwazgn8zx"/><path class="juytcbcuo"/><g class="xtpeb-edw"><path class="ermbv6b9l"/><path class="sats95d6c"/></g>`,
		"fallback": "solar:flashlight-on-bold-duotone",
	});
}

export default Component;
