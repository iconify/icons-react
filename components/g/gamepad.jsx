import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tz8p96ses.css';
import '../../css/g/gjz44fbzs.css';
import '../../css/u/ufhycxbld.css';
import '../../css/j/j5doccc-u.css';
import '../../css/h/hqz_y6brn.css';
import '../../css/c/cyogq97kg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="tz8p96ses"/><circle class="gjz44fbzs"/><circle class="ufhycxbld"/><path class="j5doccc-u"/><path class="hqz_y6brn"/><path class="cyogq97kg"/></g>`,
		"fallback": "icon-park:gamepad",
	});
}

export default Component;
