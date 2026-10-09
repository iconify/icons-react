import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/w/wou0m8doy.css';
import '../../css/g/gpajhpb2s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="wou0m8doy"/><path class="gpajhpb2s"/>`,
		"fallback": "energy-icons:arrow-right-circle-48-bold",
	});
}

export default Component;
