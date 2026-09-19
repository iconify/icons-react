import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efo1t8wme.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efo1t8wme"/>`,
		"fallback": "icon-park-outline:chopsticks-fork",
	});
}

export default Component;
