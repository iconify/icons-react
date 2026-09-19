import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne_11cc-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne_11cc-d"/>`,
		"fallback": "icon-park:diamond-three",
	});
}

export default Component;
