import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/vjzosvb-h.css';
import '../../css/e/etfs49m8c.css';
import '../../css/u/u7mfixf6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect transform="rotate(180 38 30)" class="vjzosvb-h"/><path class="etfs49m8c"/><path class="u7mfixf6h"/></g>`,
		"fallback": "icon-park:distribute-vertically",
	});
}

export default Component;
