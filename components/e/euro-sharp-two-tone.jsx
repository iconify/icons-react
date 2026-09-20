import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llh2edb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llh2edb5w"/>`,
		"fallback": "keyline-icons:euro-sharp-two-tone",
	});
}

export default Component;
