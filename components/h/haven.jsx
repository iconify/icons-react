import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfj4n6bhe.css';
import '../../css/c/c_ujhr3-b.css';
import '../../css/o/o53t7ndwk.css';
import '../../css/d/dq8fp07lv.css';
import '../../css/v/vgqse848f.css';
import '../../css/e/eiixknbfk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfj4n6bhe"/><linearGradient id="SVGNPoLYdUe" x1="-1402.077" x2="-1401.077" y1="1.455" y2="2.455" gradientTransform="matrix(358.39999 0 0 389.12 502581.19 -504.57)" gradientUnits="userSpaceOnUse"><stop offset="0" class="c_ujhr3-b"/><stop offset="1" class="o53t7ndwk"/></linearGradient><path fill="url(#SVGNPoLYdUe)" class="dq8fp07lv"/><path class="vgqse848f"/><path class="eiixknbfk"/>`,
		"fallback": "selfhst:haven",
	});
}

export default Component;
