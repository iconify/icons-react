import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot99fcl4y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot99fcl4y"/>`,
		"fallback": "energy-icons:chevrons-up-down-20",
	});
}

export default Component;
