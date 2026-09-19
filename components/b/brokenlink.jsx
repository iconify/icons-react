import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4z7z5blx.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4z7z5blx"/>`,
		"fallback": "whh:brokenlink",
	});
}

export default Component;
