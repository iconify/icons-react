import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4xw7764u.css';
import '../../css/u/uk7qgtbdq.css';
import '../../css/i/ig2_59b5g.css';
import '../../css/j/j_kppeg2r.css';
import '../../css/l/lcjx7jb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4xw7764u"/><circle class="uk7qgtbdq"/><circle class="ig2_59b5g"/><circle class="j_kppeg2r"/><circle class="lcjx7jb9k"/>`,
		"fallback": "bx:bx-scatter-chart",
	});
}

export default Component;
