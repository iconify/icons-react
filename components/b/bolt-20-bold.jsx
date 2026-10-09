import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqm7b_roe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqm7b_roe"/>`,
		"fallback": "energy-icons:bolt-20-bold",
	});
}

export default Component;
