import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kamhrtb5g.css';
import '../../css/l/l9ok9ouey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kamhrtb5g"/><path class="l9ok9ouey"/>`,
		"fallback": "mingcute:cooldown-fill",
	});
}

export default Component;
