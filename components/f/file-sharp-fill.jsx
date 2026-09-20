import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrwiemb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrwiemb6d"/>`,
		"fallback": "keyline-icons:file-sharp-fill",
	});
}

export default Component;
