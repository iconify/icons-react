import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy9u_gbwh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hy9u_gbwh"/>`,
		"fallback": "gravity-ui:arrows-rotate-right",
	});
}

export default Component;
