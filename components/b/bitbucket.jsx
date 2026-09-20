import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xypm74srv.css';
import '../../css/g/g0vp3ubkb.css';
import '../../css/s/sav6x4bmf.css';
import '../../css/g/g_gp7lgqe.css';
import '../../css/m/m6rsi3vfl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xypm74srv"/><path class="g0vp3ubkb"/><linearGradient id="SVG1azSgc4k" x1="-752.552" x2="-752.679" y1="-143.079" y2="-142.945" gradientTransform="matrix(1996.6343 0 0 1480.3047 1503095.25 212023.656)" gradientUnits="userSpaceOnUse"><stop offset=".18" class="sav6x4bmf"/><stop offset="1" class="g_gp7lgqe"/></linearGradient><path fill="url(#SVG1azSgc4k)" class="m6rsi3vfl"/>`,
		"fallback": "selfhst:bitbucket",
	});
}

export default Component;
