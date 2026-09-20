import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b26ky1b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b26ky1b-c"/>`,
		"fallback": "keyline-icons:circle-arrow-u-turn-right-sharp-fill",
	});
}

export default Component;
