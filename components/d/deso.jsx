import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzfci_b_j.css';
import '../../css/u/u3uqfyj5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzfci_b_j"/><path class="u3uqfyj5t"/>`,
		"fallback": "token:deso",
	});
}

export default Component;
