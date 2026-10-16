import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob4lgh48c.css';
import '../../css/k/k5v_esb1a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob4lgh48c"/><path class="k5v_esb1a"/>`,
		"fallback": "energy-icons:cable-joint-48-bold",
	});
}

export default Component;
