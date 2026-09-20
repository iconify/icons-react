import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpj0e4q2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpj0e4q2t"/>`,
		"fallback": "mdi:chess-bishop",
	});
}

export default Component;
