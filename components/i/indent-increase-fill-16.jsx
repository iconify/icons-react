import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efihxg8fx.css';
import '../../css/s/sz9hlnbjp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efihxg8fx"/><path class="sz9hlnbjp"/>`,
		"fallback": "garden:indent-increase-fill-16",
	});
}

export default Component;
