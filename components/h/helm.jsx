import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_4wmij0s.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_4wmij0s"/>`,
		"fallback": "material-icon-theme:helm",
	});
}

export default Component;
