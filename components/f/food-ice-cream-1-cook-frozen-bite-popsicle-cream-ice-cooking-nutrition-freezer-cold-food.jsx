import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrnhq8b9q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrnhq8b9q"/>`,
		"fallback": "streamline:food-ice-cream-1-cook-frozen-bite-popsicle-cream-ice-cooking-nutrition-freezer-cold-food",
	});
}

export default Component;
