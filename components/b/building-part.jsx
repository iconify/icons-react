import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu8s5r7ix.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu8s5r7ix"/>`,
		"fallback": "roentgen:building-part",
	});
}

export default Component;
