import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4i81-f_x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v4i81-f_x"/>`,
		"fallback": "gravity-ui:circle-info",
	});
}

export default Component;
