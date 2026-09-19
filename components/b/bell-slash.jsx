import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lacbqkb7o.css';

const viewBox = {"width":2048,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lacbqkb7o"/>`,
		"fallback": "fa:bell-slash",
	});
}

export default Component;
