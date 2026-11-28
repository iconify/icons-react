import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7_zzsbit.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b00ennbgq.css';
import '../../css/v/vati7obtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7_zzsbit secondary"/><g class="dt0cm9dhy primary"><path class="b00ennbgq"/><path class="vati7obtv"/></g>`,
		"fallback": "iconaut:hexagon-half-duo",
	});
}

export default Component;
