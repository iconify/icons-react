import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rup45gbcs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rup45gbcs"/>`,
		"fallback": "icon-park-outline:cube",
	});
}

export default Component;
