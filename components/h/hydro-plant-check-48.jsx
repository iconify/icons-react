import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4__ecb7c.css';
import '../../css/h/hc_-pfegj.css';
import '../../css/x/xvk022b8m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4__ecb7c"/><path class="hc_-pfegj"/><path class="xvk022b8m"/>`,
		"fallback": "energy-icons:hydro-plant-check-48",
	});
}

export default Component;
