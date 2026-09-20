import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fm18ohagw.css';
import '../../css/u/u50axcbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fm18ohagw"/><path class="u50axcbzd"/></g>`,
		"fallback": "streamline-sharp-color:blood-bag-donation-flat",
	});
}

export default Component;
