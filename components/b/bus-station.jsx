import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyp1fvbnt.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyp1fvbnt"/>`,
		"fallback": "map:bus-station",
	});
}

export default Component;
