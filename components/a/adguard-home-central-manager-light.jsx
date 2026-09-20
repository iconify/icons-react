import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tb9i-5hiz.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/a/algf38bxk.css';
import '../../css/d/d3blh1bls.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG2oBCYb7q" x1="18.591" x2="534.669" y1="-27.805" y2="488.273" gradientUnits="userSpaceOnUse"><stop offset="0" class="tb9i-5hiz"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVG2oBCYb7q)" class="algf38bxk"/><path class="d3blh1bls"/>`,
		"fallback": "selfhst:adguard-home-central-manager-light",
	});
}

export default Component;
