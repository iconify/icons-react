import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqz1gepph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqz1gepph"/>`,
		"fallback": "lucide-extended:arrow-big-up-dash-filled",
	});
}

export default Component;
