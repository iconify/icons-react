import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voay2fb_x.css';
import '../../css/r/r4pjpcbzy.css';
import '../../css/h/h5aevgb_l.css';
import '../../css/g/g-sabdtpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voay2fb_x"/><path class="r4pjpcbzy"/><path class="h5aevgb_l"/><path clip-rule="evenodd" class="g-sabdtpw"/>`,
		"fallback": "solar:home-wifi-angle-outline",
	});
}

export default Component;
