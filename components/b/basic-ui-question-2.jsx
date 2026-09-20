import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9x6-5j_z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q9x6-5j_z"/>`,
		"fallback": "streamline-block:basic-ui-question-2",
	});
}

export default Component;
