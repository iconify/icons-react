import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6pa3e19z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6pa3e19z"/>`,
		"fallback": "pinhead:bridge-tied-arch",
	});
}

export default Component;
