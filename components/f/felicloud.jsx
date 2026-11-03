import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh15ailor.css';
import '../../css/v/v_-jg8uqn.css';
import '../../css/v/vblcbgz4f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGImzsOdxr" x1="-689.903" x2="-689.903" y1="788.911" y2="781.8" gradientTransform="matrix(72 0 0 -45 49929 35597)" gradientUnits="userSpaceOnUse"><stop offset="0" class="fh15ailor"/><stop offset="1" class="v_-jg8uqn"/></linearGradient><path fill="url(#SVGImzsOdxr)" class="vblcbgz4f"/>`,
		"fallback": "selfhst:felicloud",
	});
}

export default Component;
