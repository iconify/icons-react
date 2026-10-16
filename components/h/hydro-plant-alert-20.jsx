import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dix-bwb7j.css';
import '../../css/e/enqyk-b4p.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dix-bwb7j"/><path class="enqyk-b4p"/><path class="nq5_p_bzp"/>`,
		"fallback": "energy-icons:hydro-plant-alert-20",
	});
}

export default Component;
