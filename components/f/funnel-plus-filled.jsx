import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3e-_2bze.css';
import '../../css/n/n6-kt6b9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3e-_2bze"/><path class="n6-kt6b9h"/>`,
		"fallback": "lucide-extended:funnel-plus-filled",
	});
}

export default Component;
