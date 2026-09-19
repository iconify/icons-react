import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-zz1ta_g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-zz1ta_g"/>`,
		"fallback": "icon-park-outline:align-text-both",
	});
}

export default Component;
