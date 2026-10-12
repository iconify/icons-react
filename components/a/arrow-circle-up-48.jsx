import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/v/vsfu1boez.css';
import '../../css/k/kx_j2o2wy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="vsfu1boez"/><path class="kx_j2o2wy"/>`,
		"fallback": "energy-icons:arrow-circle-up-48",
	});
}

export default Component;
