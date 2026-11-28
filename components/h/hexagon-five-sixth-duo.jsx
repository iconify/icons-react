import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqw8wqk3y.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b00ennbgq.css';
import '../../css/k/k9-aeccgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqw8wqk3y secondary"/><g class="dt0cm9dhy primary"><path class="b00ennbgq"/><path class="k9-aeccgi"/></g>`,
		"fallback": "iconaut:hexagon-five-sixth-duo",
	});
}

export default Component;
