import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sqqlng0bi.css';
import '../../css/b/b99wzdbrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sqqlng0bi"/><path class="b99wzdbrx"/></g>`,
		"fallback": "iconoir:comp-align-bottom-solid",
	});
}

export default Component;
