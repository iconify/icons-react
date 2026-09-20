import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlh6g6b5c.css';
import '../../css/p/p7dgj3-kq.css';
import '../../css/q/qp90ynbga.css';
import '../../css/p/prl83_jif.css';
import '../../css/c/chm_nid-f.css';
import '../../css/j/jycm6lbbq.css';
import '../../css/n/nm8bui4kj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path fill="url(#SVGrg1Rxd5a)" class="dlh6g6b5c"/><path fill="url(#SVGhfKWUdwJ)" class="p7dgj3-kq"/><path class="qp90ynbga"/><defs><linearGradient id="SVGrg1Rxd5a" x1="12" x2="12" y1="0" y2="24" gradientUnits="userSpaceOnUse"><stop class="prl83_jif"/><stop offset="1" class="chm_nid-f"/></linearGradient><linearGradient id="SVGhfKWUdwJ" x1="12" x2="12" y1="3.934" y2="20.066" gradientUnits="userSpaceOnUse"><stop class="jycm6lbbq"/><stop offset="1" class="nm8bui4kj"/></linearGradient></defs>`,
		"fallback": "thesvg-color:civitai",
	});
}

export default Component;
