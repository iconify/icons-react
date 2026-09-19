import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcj7q3bli.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcj7q3bli"/>`,
		"fallback": "whh:download",
	});
}

export default Component;
