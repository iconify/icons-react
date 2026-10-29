import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mz-0mbz4s.css';
import '../../css/n/nfg_d6b8i.css';
import '../../css/t/t3llp34em.css';
import '../../css/c/cppgcnbkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mz-0mbz4s wm-k"/><path class="nfg_d6b8i"/><path class="t3llp34em"/><path class="cppgcnbkj wm-s"/></g>`,
		"fallback": "withicons-bauhaus:cloud-sun-rain",
	});
}

export default Component;
