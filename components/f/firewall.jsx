import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzj2zq6ak.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzj2zq6ak"/>`,
		"fallback": "whh:firewall",
	});
}

export default Component;
