import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dyhmebbrg.css';
import '../../css/u/ub8jpuphi.css';
import '../../css/w/w-k3nsnnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="dyhmebbrg"/><path class="ub8jpuphi"/><path class="w-k3nsnnd"/></g>`,
		"fallback": "streamline-logos:flutter-logo",
	});
}

export default Component;
