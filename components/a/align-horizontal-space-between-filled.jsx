import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lumwujblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lumwujblz"/>`,
		"fallback": "lucide-extended:align-horizontal-space-between-filled",
	});
}

export default Component;
