import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec3vx5m2n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec3vx5m2n"/>`,
		"fallback": "pinhead:arrow-left-to-rectangle-tall-outline",
	});
}

export default Component;
