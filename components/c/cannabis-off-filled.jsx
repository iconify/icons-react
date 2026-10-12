import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcygz2abe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcygz2abe"/>`,
		"fallback": "lucide-extended:cannabis-off-filled",
	});
}

export default Component;
