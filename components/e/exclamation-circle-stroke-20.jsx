import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xphq9lb9l.css';
import '../../css/d/d32lng5vc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xphq9lb9l"/><path class="d32lng5vc"/>`,
		"fallback": "garden:exclamation-circle-stroke-20",
	});
}

export default Component;
