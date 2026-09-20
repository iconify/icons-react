import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elzr7jb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elzr7jb4n"/>`,
		"fallback": "ri:calculator-line",
	});
}

export default Component;
