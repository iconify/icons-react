import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1p3esqct.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dn3x7ab3i.css';
import '../../css/z/zzhd17b7a.css';
import '../../css/l/lvd-a_hwi.css';
import '../../css/i/icq-r7o2s.css';
import '../../css/t/t6jsq9biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1p3esqct secondary"/><g class="dt0cm9dhy primary"><path class="dn3x7ab3i"/><path class="zzhd17b7a"/><path class="lvd-a_hwi"/><path class="icq-r7o2s"/><path class="t6jsq9biy"/></g>`,
		"fallback": "iconaut:image-wrap-right-duo",
	});
}

export default Component;
