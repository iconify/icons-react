import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfdnp7j9g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yfdnp7j9g"/>`,
		"fallback": "gravity-ui:circle-letter-c",
	});
}

export default Component;
