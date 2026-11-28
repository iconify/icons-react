import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux6sm4baj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lhi-d6nau.css';
import '../../css/f/fi474t81h.css';
import '../../css/x/xg17tff9f.css';
import '../../css/z/z8xzhab4p.css';
import '../../css/a/a6yvyhbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ux6sm4baj"/><g class="dt0cm9dhy primary"><path class="lhi-d6nau"/><path class="fi474t81h"/><path class="xg17tff9f"/><path class="z8xzhab4p"/><path class="a6yvyhbgi"/></g>`,
		"fallback": "iconaut:candy-duo",
	});
}

export default Component;
