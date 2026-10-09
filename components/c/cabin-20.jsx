import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7dkqbcdb.css';
import '../../css/e/enzpns2dp.css';
import '../../css/o/o3au9s7tu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7dkqbcdb"/><path class="enzpns2dp"/><path class="o3au9s7tu"/>`,
		"fallback": "energy-icons:cabin-20",
	});
}

export default Component;
