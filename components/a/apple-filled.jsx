import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo4eunb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo4eunb0q"/>`,
		"fallback": "lucide-extended:apple-filled",
	});
}

export default Component;
