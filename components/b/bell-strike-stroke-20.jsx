import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-73xxboi.css';
import '../../css/a/as12j9bus.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-73xxboi"/><path class="as12j9bus"/>`,
		"fallback": "garden:bell-strike-stroke-20",
	});
}

export default Component;
