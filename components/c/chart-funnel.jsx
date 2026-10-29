import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/arka26qxa.css';
import '../../css/f/fi7v9gbwz.css';
import '../../css/r/ret3hccpf.css';
import '../../css/s/ss2rsyb5w.css';
import '../../css/h/h47i1g-2m.css';
import '../../css/d/didlz4b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="arka26qxa wm-k"/><path class="fi7v9gbwz wm-k"/><path class="ret3hccpf wm-k"/><path class="ss2rsyb5w wm-k"/><path class="h47i1g-2m wm-shine"/><path class="didlz4b-o wm-a"/></g>`,
		"fallback": "withicons-anime:chart-funnel",
	});
}

export default Component;
