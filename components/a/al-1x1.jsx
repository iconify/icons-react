import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjdv0zb8x.css';
import '../../css/f/fvkle4b8d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjdv0zb8x"/><path id="SVGI1EjMhei" class="fvkle4b8d"/><use width="100%" height="100%" href="#SVGI1EjMhei" transform="matrix(-1 0 0 1 512 0)"/>`,
		"fallback": "flag:al-1x1",
	});
}

export default Component;
