import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrlnjebgi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hrlnjebgi"/>`,
		"fallback": "gravity-ui:circle-check-fill",
	});
}

export default Component;
