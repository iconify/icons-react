import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eskjnab0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eskjnab0d"/>`,
		"fallback": "tabler:inner-shadow-bottom-filled",
	});
}

export default Component;
