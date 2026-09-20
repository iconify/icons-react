import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b8ybkilnt.css';
import '../../css/o/ovhtyslht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="b8ybkilnt"/><path class="ovhtyslht"/></g>`,
		"fallback": "reicon:dislike3",
	});
}

export default Component;
