import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rc4l1o1iu.css';
import '../../css/l/laouckjiw.css';
import '../../css/h/hgkgp9enu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rc4l1o1iu"/><path clip-rule="evenodd" class="laouckjiw"/><path class="hgkgp9enu"/></g>`,
		"fallback": "keyline-icons:hat-glasses-sharp-duotone",
	});
}

export default Component;
