import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m24wi8bnz.css';
import '../../css/n/ntd2yfzrm.css';
import '../../css/b/bi_k8i90y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m24wi8bnz"/><path class="ntd2yfzrm"/><path class="bi_k8i90y"/>`,
		"fallback": "energy-icons:fire-extinguisher-48",
	});
}

export default Component;
