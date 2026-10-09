import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9mjsubkx.css';
import '../../css/q/qaip3db6z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9mjsubkx"/><path class="qaip3db6z"/>`,
		"fallback": "energy-icons:bus-48-bold",
	});
}

export default Component;
