import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j93ektbkr.css';
import '../../css/z/zf5iukb_v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j93ektbkr"/><path class="zf5iukb_v"/>`,
		"fallback": "energy-icons:capacitor-48-bold",
	});
}

export default Component;
