import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5_sz-bgs.css';
import '../../css/b/b86mn5bez.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5_sz-bgs"/><path class="b86mn5bez"/>`,
		"fallback": "energy-icons:bridge-20-bold",
	});
}

export default Component;
