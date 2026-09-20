import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwg9x0t8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwg9x0t8p"/>`,
		"fallback": "reicon:hierarchy-square2-filled",
	});
}

export default Component;
