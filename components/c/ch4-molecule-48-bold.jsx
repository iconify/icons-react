import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4vlm1c_q.css';
import '../../css/l/lt9-gpbgp.css';
import '../../css/h/hv50mzxzc.css';
import '../../css/l/lrmj16b_q.css';
import '../../css/j/j-rqwlqxm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4vlm1c_q"/><path class="lt9-gpbgp"/><path class="hv50mzxzc"/><path class="lrmj16b_q"/><path class="j-rqwlqxm"/>`,
		"fallback": "energy-icons:ch4-molecule-48-bold",
	});
}

export default Component;
