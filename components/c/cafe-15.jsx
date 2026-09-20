import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjptt3u3h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjptt3u3h"/>`,
		"fallback": "maki:cafe-15",
	});
}

export default Component;
