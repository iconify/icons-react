import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq88i7qnu.css';
import '../../css/u/u4a6gjv0o.css';
import '../../css/q/qgqlwsbbr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq88i7qnu"/><path class="u4a6gjv0o"/><path class="qgqlwsbbr"/>`,
		"fallback": "energy-icons:gift-card-48",
	});
}

export default Component;
