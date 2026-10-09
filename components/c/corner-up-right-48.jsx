import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr-pjp-tv.css';
import '../../css/l/lmp8iccnc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr-pjp-tv"/><path class="lmp8iccnc"/>`,
		"fallback": "energy-icons:corner-up-right-48",
	});
}

export default Component;
