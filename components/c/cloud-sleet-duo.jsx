import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msk0mniql.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b66ewmbkg.css';
import '../../css/l/l94vs052n.css';
import '../../css/v/voejvxb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msk0mniql secondary"/><g class="dt0cm9dhy primary"><path class="b66ewmbkg"/><path class="l94vs052n"/><path class="voejvxb4c"/></g>`,
		"fallback": "iconaut:cloud-sleet-duo",
	});
}

export default Component;
