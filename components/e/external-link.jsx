import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wz9zxo4hl.css';
import '../../css/f/f9qm8fqzp.css';
import '../../css/y/y125glteo.css';
import '../../css/h/hr89acbnv.css';
import '../../css/m/mei7kab1r.css';
import '../../css/g/guh4dirje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wz9zxo4hl"/><path class="f9qm8fqzp"/><path class="y125glteo"/><path class="hr89acbnv"/><path class="mei7kab1r"/><path class="guh4dirje"/></g>`,
		"fallback": "withicons-retro:external-link",
	});
}

export default Component;
