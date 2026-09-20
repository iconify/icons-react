import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itg833o_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itg833o_w"/>`,
		"fallback": "lucide:cloud-rain",
	});
}

export default Component;
