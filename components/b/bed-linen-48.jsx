import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk2co3bdu.css';
import '../../css/p/ph74n2b1g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fk2co3bdu"/><path class="ph74n2b1g"/>`,
		"fallback": "energy-icons:bed-linen-48",
	});
}

export default Component;
