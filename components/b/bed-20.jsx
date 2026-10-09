import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm_jeenba.css';
import '../../css/k/k0o87zohe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm_jeenba"/><path class="k0o87zohe"/>`,
		"fallback": "energy-icons:bed-20",
	});
}

export default Component;
