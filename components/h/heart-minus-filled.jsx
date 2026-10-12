import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikrl6obvt.css';
import '../../css/o/omixov_3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikrl6obvt"/><path class="omixov_3m"/>`,
		"fallback": "lucide-extended:heart-minus-filled",
	});
}

export default Component;
