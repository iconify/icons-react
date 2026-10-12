import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efr7zvbhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efr7zvbhc"/>`,
		"fallback": "lucide-extended:arrow-big-left-filled",
	});
}

export default Component;
