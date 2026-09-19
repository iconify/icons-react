import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyh8ppbld.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyh8ppbld"/>`,
		"fallback": "icon-park-outline:high-heeled-shoes",
	});
}

export default Component;
