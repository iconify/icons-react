import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm4ww6bjf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jm4ww6bjf"/>`,
		"fallback": "gravity-ui:circle-exclamation",
	});
}

export default Component;
