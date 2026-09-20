import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5tmu2-3z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5tmu2-3z"/>`,
		"fallback": "pinhead:crown",
	});
}

export default Component;
