import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iftoou-8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iftoou-8z"/>`,
		"fallback": "keyline-icons:file-zip-sharp-fill",
	});
}

export default Component;
