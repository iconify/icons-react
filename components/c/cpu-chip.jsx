import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopqbz9oh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gopqbz9oh"/>`,
		"fallback": "heroicons-outline:cpu-chip",
	});
}

export default Component;
