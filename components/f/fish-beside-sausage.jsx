import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1ut0ub3z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1ut0ub3z"/>`,
		"fallback": "pinhead:fish-beside-sausage",
	});
}

export default Component;
