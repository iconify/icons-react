import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jddr2hbja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jddr2hbja"/>`,
		"fallback": "icon-park-outline:cross-society",
	});
}

export default Component;
