import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfzh94b8z.css';
import '../../css/a/a-jdjk9ia.css';
import '../../css/j/jzbwfackt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jfzh94b8z"/><path class="a-jdjk9ia"/><path class="jzbwfackt"/></g>`,
		"fallback": "andrsrxn:cloud-refresh",
	});
}

export default Component;
