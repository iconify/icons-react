import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mpg3hvb0k.css';
import '../../css/b/bfbs_7bah.css';
import '../../css/h/hh_45xbdi.css';
import '../../css/z/zyqzzubeh.css';
import '../../css/g/g8hx6db8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mpg3hvb0k"/><path class="bfbs_7bah wm-a"/><path class="hh_45xbdi wm-k"/><path class="wm-a zyqzzubeh"/><path class="g8hx6db8y wm-s"/></g>`,
		"fallback": "withicons:briefcase-business-sketch",
	});
}

export default Component;
