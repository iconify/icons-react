import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tly2nbbsq.css';
import '../../css/e/eoifswn5b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tly2nbbsq"/><path class="eoifswn5b"/>`,
		"fallback": "energy-icons:drilling-rig-20-bold",
	});
}

export default Component;
