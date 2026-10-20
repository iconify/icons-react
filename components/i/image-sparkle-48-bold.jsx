import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcfuqov3g.css';
import '../../css/w/wb2m571ci.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcfuqov3g"/><path class="wb2m571ci"/>`,
		"fallback": "energy-icons:image-sparkle-48-bold",
	});
}

export default Component;
