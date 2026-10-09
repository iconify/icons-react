import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emm9a3bua.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emm9a3bua"/>`,
		"fallback": "energy-icons:circle-dashed-20-bold",
	});
}

export default Component;
