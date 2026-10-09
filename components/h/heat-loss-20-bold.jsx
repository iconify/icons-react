import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-nqb5bcq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-nqb5bcq"/>`,
		"fallback": "energy-icons:heat-loss-20-bold",
	});
}

export default Component;
