import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d07qm6b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d07qm6b6t"/>`,
		"fallback": "tabler:bot-id",
	});
}

export default Component;
