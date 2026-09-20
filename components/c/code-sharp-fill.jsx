import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smcqkob_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smcqkob_w"/>`,
		"fallback": "keyline-icons:code-sharp-fill",
	});
}

export default Component;
