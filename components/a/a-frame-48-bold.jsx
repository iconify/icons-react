import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzb20mb_q.css';
import '../../css/i/ip69v-b7a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzb20mb_q"/><path class="ip69v-b7a"/>`,
		"fallback": "energy-icons:a-frame-48-bold",
	});
}

export default Component;
