import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc75m8d8n.css';
import '../../css/t/tzev64bri.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc75m8d8n"/><path class="tzev64bri"/>`,
		"fallback": "ei:credit-card",
	});
}

export default Component;
