import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu7pogq-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cu7pogq-s"/>`,
		"fallback": "solar:dumbbells-outline",
	});
}

export default Component;
