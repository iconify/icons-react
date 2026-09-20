import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vun63ebyc.css';
import '../../css/c/cv3m8cbfd.css';
import '../../css/p/pt4esmbqb.css';
import '../../css/h/hbedfebnp.css';
import '../../css/i/ihk0qnbqd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGQqftPeSf" x1="-685.946" x2="-685.946" y1="791.86" y2="783.033" gradientTransform="matrix(56 0 0 -56 38669 44353)" gradientUnits="userSpaceOnUse"><stop offset="0" class="vun63ebyc"/><stop offset="1" class="cv3m8cbfd"/></linearGradient><path fill="url(#SVGQqftPeSf)" class="pt4esmbqb"/><path class="hbedfebnp"/><path class="ihk0qnbqd"/>`,
		"fallback": "selfhst:filerise",
	});
}

export default Component;
