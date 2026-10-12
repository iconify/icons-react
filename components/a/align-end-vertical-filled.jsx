import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfc-4abeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfc-4abeb"/>`,
		"fallback": "lucide-extended:align-end-vertical-filled",
	});
}

export default Component;
