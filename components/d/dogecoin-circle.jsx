import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dctwlj4pp.css';
import '../../css/m/m43kh5boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dctwlj4pp"/><path class="m43kh5boq"/></g>`,
		"fallback": "iconoir:dogecoin-circle",
	});
}

export default Component;
