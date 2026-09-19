import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owri_gvio.css';
import '../../css/h/hsrh2cbbh.css';
import '../../css/g/g3d9drblh.css';
import '../../css/g/guhg_mg6i.css';
import '../../css/a/at7f7jb5m.css';
import '../../css/y/y9ucj2jsq.css';
import '../../css/k/kumdft3aq.css';
import '../../css/p/p4rw2ubqp.css';
import '../../css/d/db6rh_b2y.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owri_gvio"/><path class="hsrh2cbbh"/><path class="g3d9drblh"/><path class="guhg_mg6i"/><path class="at7f7jb5m"/><path class="y9ucj2jsq"/><path class="kumdft3aq"/><path class="p4rw2ubqp"/><path class="db6rh_b2y"/>`,
		"fallback": "fxemoji:girl",
	});
}

export default Component;
