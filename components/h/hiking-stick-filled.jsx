import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqiaa8e-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sqiaa8e-t"/>`,
		"fallback": "lucide-extended:hiking-stick-filled",
	});
}

export default Component;
