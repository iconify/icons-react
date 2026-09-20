import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gos3aq1fi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gos3aq1fi"/>`,
		"fallback": "keyline-icons:app-x-sharp",
	});
}

export default Component;
