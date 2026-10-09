import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnd4qacir.css';
import '../../css/x/x43eb82dg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnd4qacir"/><path class="x43eb82dg"/>`,
		"fallback": "energy-icons:hot-dog-20-bold",
	});
}

export default Component;
