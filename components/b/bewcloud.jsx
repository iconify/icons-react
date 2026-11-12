import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zed5lgbzq.css';
import '../../css/r/ri_v651ed.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGQG6OzcJt" x1="147.689" x2="780.759" y1="-392.44" y2="-392.44" gradientTransform="matrix(.8088 0 0 -.4461 -119.44 80.95)" gradientUnits="userSpaceOnUse"><stop offset="0" class="zed5lgbzq"/><stop offset="1" class="zed5lgbzq"/></linearGradient><path fill="url(#SVGQG6OzcJt)" class="ri_v651ed"/>`,
		"fallback": "selfhst:bewcloud",
	});
}

export default Component;
