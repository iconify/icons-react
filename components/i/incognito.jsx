import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi81glb1y.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi81glb1y"/>`,
		"fallback": "picon:incognito",
	});
}

export default Component;
