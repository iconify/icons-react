import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8o5yujab.css';
import '../../css/q/qdez92c3z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8o5yujab"/><path class="qdez92c3z"/>`,
		"fallback": "energy-icons:charger-dual-48",
	});
}

export default Component;
