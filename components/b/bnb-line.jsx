import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilhchq55t.css';
import '../../css/c/cj4vqgbxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilhchq55t"/><path class="cj4vqgbxx"/>`,
		"fallback": "mingcute:bnb-line",
	});
}

export default Component;
