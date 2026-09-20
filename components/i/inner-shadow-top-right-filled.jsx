import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3m9doboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3m9doboc"/>`,
		"fallback": "tabler:inner-shadow-top-right-filled",
	});
}

export default Component;
