import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6bu27d_j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c6bu27d_j"/>`,
		"fallback": "gravity-ui:arrow-up-arrow-down",
	});
}

export default Component;
