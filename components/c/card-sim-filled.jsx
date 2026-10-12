import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkb3d8iqr.css';
import '../../css/v/vxhny_5ct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkb3d8iqr"/><path clip-rule="evenodd" class="vxhny_5ct"/>`,
		"fallback": "lucide-extended:card-sim-filled",
	});
}

export default Component;
