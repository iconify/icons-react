import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh1l9-vtp.css';

const viewBox = {"width":898,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh1l9-vtp"/>`,
		"fallback": "whh:atom",
	});
}

export default Component;
