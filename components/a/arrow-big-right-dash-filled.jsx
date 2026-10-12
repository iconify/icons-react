import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amr7ppo4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amr7ppo4b"/>`,
		"fallback": "lucide-extended:arrow-big-right-dash-filled",
	});
}

export default Component;
