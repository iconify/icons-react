import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy3btfbfu.css';
import '../../css/b/b79ewjo9h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy3btfbfu"/><path class="b79ewjo9h"/>`,
		"fallback": "energy-icons:brain-48-bold",
	});
}

export default Component;
