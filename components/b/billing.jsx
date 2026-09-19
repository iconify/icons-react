import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7sr6ubzr.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b6_kdjuuf.css';
import '../../css/p/pn6f8bccw.css';
import '../../css/d/dauo57blm.css';
import '../../css/h/hkxrhjboq.css';
import '../../css/s/sm-sulbbb.css';
import '../../css/u/ulj8g7b8b.css';
import '../../css/m/mnns9obth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7sr6ubzr"/><g class="d2kvgvbvc"><path class="b6_kdjuuf"/><path class="pn6f8bccw"/><path class="dauo57blm"/><path class="hkxrhjboq"/><path class="sm-sulbbb"/><path class="ulj8g7b8b"/><path class="mnns9obth"/></g>`,
		"fallback": "gcp:billing",
	});
}

export default Component;
