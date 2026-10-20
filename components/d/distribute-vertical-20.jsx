import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6w625b-a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6w625b-a"/>`,
		"fallback": "energy-icons:distribute-vertical-20",
	});
}

export default Component;
