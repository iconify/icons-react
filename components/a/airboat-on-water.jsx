import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dah24j1fr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dah24j1fr"/>`,
		"fallback": "pinhead:airboat-on-water",
	});
}

export default Component;
