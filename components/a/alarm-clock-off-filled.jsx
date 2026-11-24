import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/weapb9upb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="weapb9upb"/>`,
		"fallback": "lucide-extended:alarm-clock-off-filled",
	});
}

export default Component;
