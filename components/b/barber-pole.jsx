import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idpmgebvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idpmgebvh"/>`,
		"fallback": "lucide-lab:barber-pole",
	});
}

export default Component;
