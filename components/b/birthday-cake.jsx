import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzvekvb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzvekvb1f"/>`,
		"fallback": "mdi:birthday-cake",
	});
}

export default Component;
