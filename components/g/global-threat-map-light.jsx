import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmc55qbpv.css';
import '../../css/p/p48_jkbmd.css';
import '../../css/g/gom_ccb7u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmc55qbpv"/><circle class="p48_jkbmd"/><circle class="gom_ccb7u"/>`,
		"fallback": "selfhst:global-threat-map-light",
	});
}

export default Component;
