import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deev21pro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="deev21pro"/>`,
		"fallback": "wordpress:chevron-left",
	});
}

export default Component;
