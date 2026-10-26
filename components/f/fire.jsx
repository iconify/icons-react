import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btc2bc1ol.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btc2bc1ol"/>`,
		"fallback": "doodle-icons:fire",
	});
}

export default Component;
