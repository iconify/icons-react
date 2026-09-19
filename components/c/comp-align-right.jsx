import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l6tbdz50i.css';
import '../../css/v/v4byqjbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="l6tbdz50i"/><path class="v4byqjbey"/></g>`,
		"fallback": "iconoir:comp-align-right",
	});
}

export default Component;
