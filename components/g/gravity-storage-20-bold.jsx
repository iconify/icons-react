import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-ahsnbld.css';
import '../../css/w/wc5gufbvx.css';
import '../../css/i/itu8fbbds.css';
import '../../css/v/vjij33b4c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-ahsnbld"/><path class="wc5gufbvx"/><path class="itu8fbbds"/><path class="vjij33b4c"/>`,
		"fallback": "energy-icons:gravity-storage-20-bold",
	});
}

export default Component;
