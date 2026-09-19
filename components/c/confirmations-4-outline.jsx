import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/rdjp0q8rs.css';
import '../../css/k/k_zqo0b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="rdjp0q8rs"/><path class="k_zqo0b2m"/></g>`,
		"fallback": "bitcoin-icons:confirmations-4-outline",
	});
}

export default Component;
