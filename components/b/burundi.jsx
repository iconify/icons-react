import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niuelpbca.css';
import '../../css/h/hsgjtibkt.css';
import '../../css/e/e-xmbx7qy.css';
import '../../css/v/vjl19yb4p.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="niuelpbca"/><path class="hsgjtibkt"/><path class="e-xmbx7qy"/><path class="vjl19yb4p"/>`,
		"fallback": "tabler-flags:burundi",
	});
}

export default Component;
