import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m3pckpcoa.css';
import '../../css/v/vbp1b5sfe.css';
import '../../css/v/vn7ulgb4c.css';
import '../../css/m/mep2-c7qv.css';
import '../../css/y/y3n5ew-kq.css';
import '../../css/s/sdtgrrbdg.css';
import '../../css/a/aza2b6v_c.css';
import '../../css/r/rlk90acht.css';
import '../../css/q/qc8rs_c1a.css';
import '../../css/a/ag9a_ybow.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m3pckpcoa"/><path class="vbp1b5sfe"/><path class="vn7ulgb4c"/><path class="mep2-c7qv"/><path class="y3n5ew-kq"/><path class="sdtgrrbdg"/><path class="aza2b6v_c"/><path class="rlk90acht"/><path class="qc8rs_c1a"/><path class="ag9a_ybow"/></g>`,
		"fallback": "fluent-emoji-flat:baby-medium-dark",
	});
}

export default Component;
