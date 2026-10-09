import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqjn82ber.css';
import '../../css/z/z0zraxben.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqjn82ber"/><path class="z0zraxben"/>`,
		"fallback": "energy-icons:edit-48-bold",
	});
}

export default Component;
