import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bop0cmbcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bop0cmbcg"/>`,
		"fallback": "mingcute:crystal-ball-line",
	});
}

export default Component;
