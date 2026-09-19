import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3dpzbtra.css';
import '../../css/r/ry3fse1zo.css';
import '../../css/u/ul1worher.css';
import '../../css/l/llqfild5y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y3dpzbtra"><path class="ry3fse1zo"/><path class="ul1worher"/><path class="llqfild5y"/></g>`,
		"fallback": "icon-park-solid:baokemeng",
	});
}

export default Component;
