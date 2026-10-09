import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw2cq1b_w.css';
import '../../css/g/g754atbee.css';
import '../../css/r/r1difiu_d.css';
import '../../css/j/j8rue7bvc.css';
import '../../css/h/hnm4jlbps.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw2cq1b_w"/><path class="g754atbee"/><path class="r1difiu_d"/><path class="j8rue7bvc"/><path class="hnm4jlbps"/>`,
		"fallback": "energy-icons:heat-pump-air-20",
	});
}

export default Component;
