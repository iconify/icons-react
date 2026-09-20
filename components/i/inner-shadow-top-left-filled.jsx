import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntopc1bgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntopc1bgt"/>`,
		"fallback": "tabler:inner-shadow-top-left-filled",
	});
}

export default Component;
