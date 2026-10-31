import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb4bqhwjz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb4bqhwjz"/>`,
		"fallback": "pinhead:droplet-in-eaved-gabled-shelter",
	});
}

export default Component;
