import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq3mh2agg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq3mh2agg"/>`,
		"fallback": "garden:grid-2x2-fill-20",
	});
}

export default Component;
