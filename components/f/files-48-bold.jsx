import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi7uye37o.css';
import '../../css/c/cuecz6ezx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi7uye37o"/><path class="cuecz6ezx"/>`,
		"fallback": "energy-icons:files-48-bold",
	});
}

export default Component;
