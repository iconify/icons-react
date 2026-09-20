import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb8i3i-kg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb8i3i-kg"/>`,
		"fallback": "lucide-lab:card-sd",
	});
}

export default Component;
