import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrngubb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrngubb6s"/>`,
		"fallback": "keyline-icons:corner-right-up-sharp-two-tone",
	});
}

export default Component;
