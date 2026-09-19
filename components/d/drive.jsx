import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc-_9ptfv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc-_9ptfv"/>`,
		"fallback": "entypo:drive",
	});
}

export default Component;
