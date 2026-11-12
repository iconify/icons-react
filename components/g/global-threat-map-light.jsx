import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmc55qbpv.css';
import '../../css/g/g5l3qyt-f.css';
import '../../css/w/wlqkezb7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmc55qbpv"/><circle class="g5l3qyt-f"/><circle class="wlqkezb7v"/>`,
		"fallback": "selfhst:global-threat-map-light",
	});
}

export default Component;
