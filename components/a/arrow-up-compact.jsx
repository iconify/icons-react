import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uldwx8b2h.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uldwx8b2h"/>`,
		"fallback": "codicon:arrow-up-compact",
	});
}

export default Component;
