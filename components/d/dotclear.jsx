import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv3fz4b4d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv3fz4b4d"/>`,
		"fallback": "whh:dotclear",
	});
}

export default Component;
