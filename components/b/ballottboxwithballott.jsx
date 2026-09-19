import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb3tvpb7z.css';
import '../../css/w/wyc9-gbmh.css';
import '../../css/j/j0u755kff.css';
import '../../css/d/dry2-gzeo.css';
import '../../css/e/e9dd9npea.css';
import '../../css/s/si8aaswhc.css';
import '../../css/q/qes1xmb6h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb3tvpb7z"/><path class="wyc9-gbmh"/><path class="j0u755kff"/><path class="dry2-gzeo"/><path class="e9dd9npea"/><path class="si8aaswhc"/><path class="qes1xmb6h"/>`,
		"fallback": "fxemoji:ballottboxwithballott",
	});
}

export default Component;
