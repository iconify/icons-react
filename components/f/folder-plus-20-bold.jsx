import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u47_4yu8m.css';
import '../../css/h/hc4pvibee.css';
import '../../css/o/oiw__zvyr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u47_4yu8m"/><path class="hc4pvibee"/><path class="oiw__zvyr"/>`,
		"fallback": "energy-icons:folder-plus-20-bold",
	});
}

export default Component;
