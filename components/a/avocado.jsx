import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ppzv5ivnl.css';
import '../../css/c/ciubskbzs.css';
import '../../css/l/l-6vtk2ah.css';
import '../../css/h/h8jt07boo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ppzv5ivnl"/><path class="ciubskbzs"/><path class="l-6vtk2ah"/><path class="h8jt07boo"/></g>`,
		"fallback": "fluent-emoji-flat:avocado",
	});
}

export default Component;
