import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6xg2yb8p.css';
import '../../css/k/k86_pzbaj.css';
import '../../css/p/pokp4-yvi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6xg2yb8p"/><path class="k86_pzbaj"/><path class="pokp4-yvi"/>`,
		"fallback": "energy-icons:drone-inspection-48",
	});
}

export default Component;
