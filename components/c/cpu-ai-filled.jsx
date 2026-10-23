import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt1q0qbdx.css';
import '../../css/y/yq70e9tim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt1q0qbdx"/><path clip-rule="evenodd" class="yq70e9tim"/>`,
		"fallback": "lucide-extended:cpu-ai-filled",
	});
}

export default Component;
