import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6ajr_bsq.css';
import '../../css/u/ufvpeacwp.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6ajr_bsq"/><path clip-rule="evenodd" class="ufvpeacwp"/>`,
		"fallback": "lineicons:arrow-right-circle",
	});
}

export default Component;
