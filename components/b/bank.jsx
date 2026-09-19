import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv41wkk5s.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv41wkk5s"/>`,
		"fallback": "whh:bank",
	});
}

export default Component;
