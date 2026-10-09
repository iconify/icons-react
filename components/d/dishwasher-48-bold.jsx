import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9c993b2t.css';
import '../../css/q/q403o2bvc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9c993b2t"/><path class="q403o2bvc"/>`,
		"fallback": "energy-icons:dishwasher-48-bold",
	});
}

export default Component;
