import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz97d6w4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz97d6w4r"/>`,
		"fallback": "lucide:columns-2-plus-left",
	});
}

export default Component;
