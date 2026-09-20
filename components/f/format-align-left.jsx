import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhjllqb5c.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhjllqb5c"/>`,
		"fallback": "memory:format-align-left",
	});
}

export default Component;
