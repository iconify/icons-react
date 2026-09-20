import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s04m4zjux.css';
import '../../css/j/jlzxp4qwe.css';
import '../../css/q/qtt4sxbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s04m4zjux"><path class="jlzxp4qwe"/><ellipse class="qtt4sxbxn"/></g>`,
		"fallback": "thesvg-color:01dotai",
	});
}

export default Component;
