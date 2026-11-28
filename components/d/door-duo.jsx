import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exdvn478f.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h0tq4hvtq.css';
import '../../css/y/y9va7ujcs.css';
import '../../css/l/lua2tfd8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exdvn478f secondary"/><g class="dt0cm9dhy primary"><path class="h0tq4hvtq"/><path class="y9va7ujcs"/><path class="lua2tfd8g"/></g>`,
		"fallback": "iconaut:door-duo",
	});
}

export default Component;
