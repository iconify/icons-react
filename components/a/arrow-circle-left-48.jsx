import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/v/vhy3w_n5f.css';
import '../../css/u/u0lxksm7a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="vhy3w_n5f"/><path class="u0lxksm7a"/>`,
		"fallback": "energy-icons:arrow-circle-left-48",
	});
}

export default Component;
