import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygr0q7bwz.css';
import '../../css/o/opxxwacjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygr0q7bwz"/><path class="opxxwacjq"/>`,
		"fallback": "solar:chair-bold",
	});
}

export default Component;
