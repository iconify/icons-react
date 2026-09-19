import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_ak5bbdo.css';
import '../../css/g/gxg0gv6fg.css';
import '../../css/i/ieosfnksq.css';
import '../../css/k/kdpnic1uz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s_ak5bbdo"/><path class="gxg0gv6fg"/><path class="ieosfnksq"/><path class="kdpnic1uz"/></g>`,
		"fallback": "flowbite:face-grin-stars-outline",
	});
}

export default Component;
