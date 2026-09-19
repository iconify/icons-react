import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4ls-tbbt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4ls-tbbt"/>`,
		"fallback": "game-icons:column-vase",
	});
}

export default Component;
