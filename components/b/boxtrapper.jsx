import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2muvqext.css';

const viewBox = {"width":832,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2muvqext"/>`,
		"fallback": "whh:boxtrapper",
	});
}

export default Component;
