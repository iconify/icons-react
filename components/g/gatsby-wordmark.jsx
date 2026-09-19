import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy1vs24lh.css';
import '../../css/k/k3-ivsvyj.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy1vs24lh"/><path class="k3-ivsvyj"/>`,
		"fallback": "devicon:gatsby-wordmark",
	});
}

export default Component;
