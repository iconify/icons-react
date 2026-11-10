import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj9l6dm3r.css';
import '../../css/g/gxvh0c--h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj9l6dm3r"/><path class="gxvh0c--h"/>`,
		"fallback": "lucide-extended:grid-3x3-off-filled",
	});
}

export default Component;
