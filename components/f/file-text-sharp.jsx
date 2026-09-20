import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlas83qsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlas83qsx"/>`,
		"fallback": "keyline-icons:file-text-sharp",
	});
}

export default Component;
