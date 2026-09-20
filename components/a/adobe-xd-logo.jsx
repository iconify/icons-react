import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rk816acaj.css';
import '../../css/r/rqugf6b2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rk816acaj"/><path class="rqugf6b2t"/></g>`,
		"fallback": "streamline-ultimate:adobe-xd-logo",
	});
}

export default Component;
