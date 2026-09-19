import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm8vpmbuj.css';
import '../../css/y/y0l3i_qwp.css';
import '../../css/m/mxgov2bur.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm8vpmbuj"/><path class="y0l3i_qwp"/><circle class="mxgov2bur"/>`,
		"fallback": "flat-color-icons:cable-release",
	});
}

export default Component;
