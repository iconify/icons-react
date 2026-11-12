import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x154hvr7k.css';
import '../../css/d/db39vbcar.css';
import '../../css/y/y3dpsii2d.css';
import '../../css/t/tjgbqtbac.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGOlLIIcGW" x1="256" x2="256" y1="512" gradientUnits="userSpaceOnUse"><stop offset=".006" class="x154hvr7k"/><stop offset="1" class="db39vbcar"/></linearGradient><path fill="url(#SVGOlLIIcGW)" class="y3dpsii2d"/><path class="tjgbqtbac"/>`,
		"fallback": "selfhst:ejabberd",
	});
}

export default Component;
