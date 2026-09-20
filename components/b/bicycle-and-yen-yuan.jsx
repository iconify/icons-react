import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj6qfrb6y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj6qfrb6y"/>`,
		"fallback": "pinhead:bicycle-and-yen-yuan",
	});
}

export default Component;
