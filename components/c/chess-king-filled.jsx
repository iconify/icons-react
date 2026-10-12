import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y66bur87w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y66bur87w"/>`,
		"fallback": "lucide-extended:chess-king-filled",
	});
}

export default Component;
