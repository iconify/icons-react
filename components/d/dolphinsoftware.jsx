import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le1e65bhe.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le1e65bhe"/>`,
		"fallback": "whh:dolphinsoftware",
	});
}

export default Component;
