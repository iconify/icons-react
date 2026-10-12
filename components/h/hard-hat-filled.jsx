import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-y-g2b3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-y-g2b3w"/>`,
		"fallback": "lucide-extended:hard-hat-filled",
	});
}

export default Component;
