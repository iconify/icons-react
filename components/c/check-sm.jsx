import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nml4g8bfm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nml4g8bfm"/>`,
		"fallback": "pajamas:check-sm",
	});
}

export default Component;
