import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5r7npblp.css';
import '../../css/y/yxi16mj3g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5r7npblp"/><path class="yxi16mj3g"/>`,
		"fallback": "selfhst:1panel-dark",
	});
}

export default Component;
