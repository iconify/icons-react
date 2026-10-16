import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq-tdwb3q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq-tdwb3q"/>`,
		"fallback": "energy-icons:chevrons-left-right-48",
	});
}

export default Component;
