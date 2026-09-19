import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7_8rh3kz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r7_8rh3kz"/>`,
		"fallback": "gravity-ui:circle-minus-fill",
	});
}

export default Component;
