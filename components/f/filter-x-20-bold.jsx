import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9uroy2xg.css';
import '../../css/x/xso8lt60u.css';
import '../../css/f/f0tp4idyv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9uroy2xg"/><path class="xso8lt60u"/><path class="f0tp4idyv"/>`,
		"fallback": "energy-icons:filter-x-20-bold",
	});
}

export default Component;
