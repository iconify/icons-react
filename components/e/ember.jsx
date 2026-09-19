import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-9dwnblh.css';

const viewBox = {"width":384,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-9dwnblh"/>`,
		"fallback": "ps:ember",
	});
}

export default Component;
