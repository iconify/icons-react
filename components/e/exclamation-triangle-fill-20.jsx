import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc5vh_0ib.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc5vh_0ib"/>`,
		"fallback": "garden:exclamation-triangle-fill-20",
	});
}

export default Component;
