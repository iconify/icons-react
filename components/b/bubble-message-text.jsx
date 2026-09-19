import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azp3wpbpf.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azp3wpbpf"/>`,
		"fallback": "si-glyph:bubble-message-text",
	});
}

export default Component;
