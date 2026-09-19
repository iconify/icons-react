import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy71kdb4z.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dy71kdb4z"/>`,
		"fallback": "f7:chevron-compact-up",
	});
}

export default Component;
