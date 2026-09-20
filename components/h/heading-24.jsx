import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2p5vab0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2p5vab0i"/>`,
		"fallback": "octicon:heading-24",
	});
}

export default Component;
