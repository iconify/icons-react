import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7plo0j7z.css';
import '../../css/c/crwtq5bps.css';
import '../../css/i/ijtbhzpet.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7plo0j7z"/><path class="crwtq5bps"/><path class="ijtbhzpet"/>`,
		"fallback": "energy-icons:cloud-sync-48-bold",
	});
}

export default Component;
