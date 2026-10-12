import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa5vtea9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa5vtea9e"/>`,
		"fallback": "lucide-extended:grid-2x2-check-filled",
	});
}

export default Component;
