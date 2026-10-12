import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn4p0rgtg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn4p0rgtg"/>`,
		"fallback": "garden:horizontal-rule-20",
	});
}

export default Component;
