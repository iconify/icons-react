import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgl-lsb7s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgl-lsb7s"/>`,
		"fallback": "teenyicons:history-outline",
	});
}

export default Component;
