import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkauw5mui.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkauw5mui"/>`,
		"fallback": "whh:commentout",
	});
}

export default Component;
