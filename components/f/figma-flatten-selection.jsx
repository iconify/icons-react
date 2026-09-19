import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj_6wwzvx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj_6wwzvx"/>`,
		"fallback": "icon-park-outline:figma-flatten-selection",
	});
}

export default Component;
