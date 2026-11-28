import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlznw-a5v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b00ennbgq.css';
import '../../css/d/dbfl50qks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tlznw-a5v"/><g class="dt0cm9dhy primary"><path class="b00ennbgq"/><path class="dbfl50qks"/></g>`,
		"fallback": "iconaut:hexagon-third-duo",
	});
}

export default Component;
