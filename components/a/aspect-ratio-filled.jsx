import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/migij0m8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="migij0m8h"/>`,
		"fallback": "tabler:aspect-ratio-filled",
	});
}

export default Component;
