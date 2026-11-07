import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvtd-1bui.css';
import '../../css/i/i3kue5j-z.css';
import '../../css/w/wlfc-cbhd.css';
import '../../css/c/chi0adchb.css';
import '../../css/s/sq3zltb-a.css';
import '../../css/w/w2tq49b4c.css';
import '../../css/h/hy8pa9b9z.css';
import '../../css/u/u6ruwxb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvtd-1bui"/><path class="i3kue5j-z"/><path class="wlfc-cbhd"/><path class="chi0adchb"/><path class="sq3zltb-a"/><path class="w2tq49b4c"/><path class="hy8pa9b9z"/><path class="u6ruwxb-s"/>`,
		"fallback": "solar:calendar-bold-duotone",
	});
}

export default Component;
