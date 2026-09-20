import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6pf4lbun.css';
import '../../css/r/rqbyrwbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6pf4lbun"/><path class="rqbyrwbza"/>`,
		"fallback": "mage:hospital-shield-fill",
	});
}

export default Component;
