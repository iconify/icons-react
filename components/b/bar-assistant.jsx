import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdleipbps.css';
import '../../css/c/cihx9hbnv.css';
import '../../css/x/x9_rd_f2j.css';
import '../../css/i/ibitabibt.css';
import '../../css/p/pwcd7rbyd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG6ZjSNcNX" x1="325.414" x2="-128.986" y1="639.61" y2="-45.191" gradientTransform="translate(0 -279)" gradientUnits="userSpaceOnUse"><stop offset=".083" class="wdleipbps"/><stop offset=".452" class="cihx9hbnv"/><stop offset="1" class="x9_rd_f2j"/></linearGradient><path fill="url(#SVG6ZjSNcNX)" class="ibitabibt"/><path class="pwcd7rbyd"/>`,
		"fallback": "selfhst:bar-assistant",
	});
}

export default Component;
