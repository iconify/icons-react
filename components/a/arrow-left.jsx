import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-mfvhccf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-mfvhccf"/>`,
		"fallback": "oui:arrow-left",
	});
}

export default Component;
