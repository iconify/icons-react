import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaldgdc_v.css';
import '../../css/z/zhf3j9b-g.css';
import '../../css/s/siu-9_o7b.css';
import '../../css/c/csgh_wbzd.css';
import '../../css/e/ez8jp6bpu.css';
import '../../css/f/f2kerjmtc.css';
import '../../css/p/pne3pub7v.css';
import '../../css/q/qo6b-rtki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaldgdc_v wm-shadow"/><path class="wm-k zhf3j9b-g"/><path class="siu-9_o7b wm-k"/><path class="csgh_wbzd wm-k"/><path class="ez8jp6bpu wm-k"/><path class="f2kerjmtc wm-k"/><path class="pne3pub7v wm-shine"/><path class="qo6b-rtki wm-a"/>`,
		"fallback": "withicons-pastel:check-circle",
	});
}

export default Component;
