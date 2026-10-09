import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nors1t8an.css';
import '../../css/m/mr67hub_l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nors1t8an"/><path class="mr67hub_l"/>`,
		"fallback": "energy-icons:hydro-plant-20-bold",
	});
}

export default Component;
