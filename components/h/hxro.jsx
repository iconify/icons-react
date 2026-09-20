import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alirshb7s.css';
import '../../css/a/asovtkbqw.css';
import '../../css/s/szpj5_vjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alirshb7s"/><path class="asovtkbqw"/><path class="szpj5_vjj"/>`,
		"fallback": "token:hxro",
	});
}

export default Component;
