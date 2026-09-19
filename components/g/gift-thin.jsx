import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zavzvmbpq.css';
import '../../css/a/azcxndzqs.css';
import '../../css/k/kgseuybgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="zavzvmbpq"/><path class="azcxndzqs"/><path class="kgseuybgc"/></g>`,
		"fallback": "iconamoon:gift-thin",
	});
}

export default Component;
