import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-whp-f_g.css';
import '../../css/u/ufvpeacwp.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-whp-f_g"/><path clip-rule="evenodd" class="ufvpeacwp"/>`,
		"fallback": "lineicons:arrow-left-circle",
	});
}

export default Component;
