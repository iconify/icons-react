import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4xr16b6e.css';
import '../../css/r/rsmwqzs4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4xr16b6e"/><path class="rsmwqzs4a"/>`,
		"fallback": "lucide-extended:ferris-wheel-filled",
	});
}

export default Component;
