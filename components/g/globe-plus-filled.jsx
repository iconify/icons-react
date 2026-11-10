import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw-wcrb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw-wcrb0k"/>`,
		"fallback": "lucide-extended:globe-plus-filled",
	});
}

export default Component;
