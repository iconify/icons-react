import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aefll9b6q.css';
import '../../css/b/b0mfz3j4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aefll9b6q"/><path class="b0mfz3j4c"/>`,
		"fallback": "bxs:group",
	});
}

export default Component;
