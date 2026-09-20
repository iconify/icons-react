import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp5w7jw4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp5w7jw4h"/>`,
		"fallback": "si:click-line",
	});
}

export default Component;
