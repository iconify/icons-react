import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pepp-t52r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pepp-t52r"/>`,
		"fallback": "garden:circle-half-stroke-20",
	});
}

export default Component;
