import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc5usib6x.css';
import '../../css/j/j2plu7b6v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc5usib6x"/><path class="j2plu7b6v"/>`,
		"fallback": "flat-color-icons:area-chart",
	});
}

export default Component;
