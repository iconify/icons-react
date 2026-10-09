import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd98t6bsy.css';
import '../../css/n/n6krgwbie.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd98t6bsy"/><path class="n6krgwbie"/>`,
		"fallback": "energy-icons:anemometer-20",
	});
}

export default Component;
