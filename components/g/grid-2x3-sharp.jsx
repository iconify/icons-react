import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpp4bbb-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpp4bbb-h"/>`,
		"fallback": "keyline-icons:grid-2x3-sharp",
	});
}

export default Component;
