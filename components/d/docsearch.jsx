import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/v/vn8sbhbcq.css';
import '../../css/e/e6yrqacor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="vn8sbhbcq"/><path class="e6yrqacor"/></g>`,
		"fallback": "thesvg-color:docsearch",
	});
}

export default Component;
