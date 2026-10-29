import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/g3os9oufa.css';
import '../../css/i/i1ukv7b8x.css';
import '../../css/o/o1t3lacdg.css';
import '../../css/h/hz54f1mtz.css';
import '../../css/g/gu25n0bai.css';
import '../../css/w/w4c39xb4o.css';
import '../../css/k/k8y8nsbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="g3os9oufa wm-deco"/><path class="i1ukv7b8x wm-deco"/><path class="o1t3lacdg wm-k"/><path class="hz54f1mtz wm-a"/><circle class="gu25n0bai wm-a"/><circle class="w4c39xb4o wm-a"/><circle class="k8y8nsbev wm-a"/></g>`,
		"fallback": "withicons:api-blueprint",
	});
}

export default Component;
