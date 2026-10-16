import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnzn_vsno.css';
import '../../css/v/vl-e_fb9f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnzn_vsno"/><path class="vl-e_fb9f"/>`,
		"fallback": "energy-icons:antenna-48",
	});
}

export default Component;
