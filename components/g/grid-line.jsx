import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot6w0-x5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot6w0-x5n"/>`,
		"fallback": "ri:grid-line",
	});
}

export default Component;
