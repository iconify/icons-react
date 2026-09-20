import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx32gdm7x.css';
import '../../css/a/algf38bxk.css';
import '../../css/g/gdiwj9opj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGURGRZqwM" x1="18.591" x2="534.669" y1="-27.805" y2="488.273" gradientUnits="userSpaceOnUse"><stop offset="0" class="qx32gdm7x"/><stop offset="1"/></linearGradient><path fill="url(#SVGURGRZqwM)" class="algf38bxk"/><path class="gdiwj9opj"/>`,
		"fallback": "selfhst:adguard-home-central-manager-dark",
	});
}

export default Component;
