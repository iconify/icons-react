import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2lw1wbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2lw1wbru"/>`,
		"fallback": "keyline-icons:face-neutral-sharp-fill",
	});
}

export default Component;
