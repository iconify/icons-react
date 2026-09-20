import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1y1e7-dj.css';
import '../../css/d/dz2ndeb-q.css';
import '../../css/o/o7tbp8bzr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGQnyPAd2z" x1="0" x2="128" y1="64" y2="64" gradientUnits="userSpaceOnUse"><stop offset="0" class="t1y1e7-dj"/><stop offset="1" class="dz2ndeb-q"/></linearGradient></defs><path fill="url(#SVGQnyPAd2z)" class="o7tbp8bzr"/>`,
		"fallback": "thesvg-color:inertiajs",
	});
}

export default Component;
