import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw-oesbrl.css';
import '../../css/n/nuvmf9bii.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw-oesbrl"/><path class="nuvmf9bii"/>`,
		"fallback": "energy-icons:battery-pouch-20-bold",
	});
}

export default Component;
