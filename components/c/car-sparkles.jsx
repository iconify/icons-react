import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5z6yebzw.css';
import '../../css/i/i9as8va8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5z6yebzw"/><path class="i9as8va8e"/>`,
		"fallback": "boxicons:car-sparkles",
	});
}

export default Component;
