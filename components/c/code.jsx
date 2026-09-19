import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4pg7ir2z.css';

const viewBox = {"width":1024,"height":769};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4pg7ir2z"/>`,
		"fallback": "whh:code",
	});
}

export default Component;
