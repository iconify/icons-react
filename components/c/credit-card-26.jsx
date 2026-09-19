import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd7n89blv.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd7n89blv"/>`,
		"fallback": "garden:credit-card-26",
	});
}

export default Component;
