import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3xx_lb7w.css';
import '../../css/r/rosvxu7bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m3xx_lb7w"/><path class="rosvxu7bf"/>`,
		"fallback": "lucide-extended:bot-off-filled",
	});
}

export default Component;
