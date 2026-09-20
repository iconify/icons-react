import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd46vfgmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd46vfgmw"/>`,
		"fallback": "mdi:ev-charger-type2",
	});
}

export default Component;
