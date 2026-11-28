import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjvnp3bmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjvnp3bmh"/>`,
		"fallback": "noviair:hotel-search",
	});
}

export default Component;
