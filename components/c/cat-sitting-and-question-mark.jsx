import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg8vo_0ux.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg8vo_0ux"/>`,
		"fallback": "pinhead:cat-sitting-and-question-mark",
	});
}

export default Component;
