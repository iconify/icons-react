import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1yx7eixm.css';
import '../../css/z/zrcrh4bnb.css';
import '../../css/j/jxmh2ibtp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="p1yx7eixm"><circle class="zrcrh4bnb"/><path class="jxmh2ibtp"/></g>`,
		"fallback": "icon-park-solid:baseball-bat",
	});
}

export default Component;
