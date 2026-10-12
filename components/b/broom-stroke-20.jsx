import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6cypmbbu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6cypmbbu"/>`,
		"fallback": "garden:broom-stroke-20",
	});
}

export default Component;
