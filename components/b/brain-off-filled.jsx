import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp4eihbdx.css';
import '../../css/v/vox3mdpjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hp4eihbdx"/><path class="vox3mdpjt"/>`,
		"fallback": "lucide-extended:brain-off-filled",
	});
}

export default Component;
