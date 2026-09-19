import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzn7rdbzn.css';

const viewBox = {"width":472,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzn7rdbzn"/>`,
		"fallback": "ps:checked",
	});
}

export default Component;
