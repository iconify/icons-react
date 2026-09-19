import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miazw5f2j.css';
import '../../css/n/n1xy6nh9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miazw5f2j"/><circle class="n1xy6nh9u"/>`,
		"fallback": "bx:bxs-compass",
	});
}

export default Component;
