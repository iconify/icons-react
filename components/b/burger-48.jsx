import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flkoy18ai.css';
import '../../css/h/h0fs14upu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flkoy18ai"/><path class="h0fs14upu"/>`,
		"fallback": "energy-icons:burger-48",
	});
}

export default Component;
