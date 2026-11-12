import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu7gz6_gr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu7gz6_gr"/>`,
		"fallback": "selfhst:dagster-dark",
	});
}

export default Component;
