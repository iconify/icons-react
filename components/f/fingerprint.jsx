import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pde51_1zl.css';
import '../../css/h/hrluizk5r.css';
import '../../css/x/xrv-a1s4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pde51_1zl"/><path class="hrluizk5r"/><path class="xrv-a1s4d"/></g>`,
		"fallback": "codex:fingerprint",
	});
}

export default Component;
