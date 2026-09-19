import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a3vz2ra4x.css';
import '../../css/j/je4w_3b8f.css';
import '../../css/p/ph2dkfjxa.css';
import '../../css/r/ray2aabwg.css';
import '../../css/f/fdfuv2mpo.css';
import '../../css/h/hpmmexcss.css';
import '../../css/t/tunb9z1fz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a3vz2ra4x"/><path class="je4w_3b8f"/><path class="ph2dkfjxa"/><path class="ray2aabwg"/><path class="fdfuv2mpo"/><path class="hpmmexcss"/><path class="tunb9z1fz"/></g>`,
		"fallback": "fluent-emoji-flat:grapes",
	});
}

export default Component;
