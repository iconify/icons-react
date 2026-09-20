import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7rob5hgo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7rob5hgo"/>`,
		"fallback": "ix:check-in",
	});
}

export default Component;
