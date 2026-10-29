import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pt2sl4spk.css';
import '../../css/t/tdjejw04c.css';
import '../../css/u/u31d1ubqy.css';
import '../../css/x/x0yp8_l9a.css';
import '../../css/z/zbbszfbkd.css';
import '../../css/v/vjvpaaccg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pt2sl4spk wm-k"/><path class="tdjejw04c wm-a"/><path class="u31d1ubqy wm-shadow"/><path class="wm-k x0yp8_l9a"/><path class="wm-a zbbszfbkd"/><path class="vjvpaaccg wm-a"/></g>`,
		"fallback": "withicons:choco-strawberry-engrave",
	});
}

export default Component;
