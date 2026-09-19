import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/myry6db3q.css';
import '../../css/w/w1li8bbqj.css';
import '../../css/n/n0-4s7bet.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="myry6db3q"/><path class="w1li8bbqj"/><path class="n0-4s7bet"/></g>`,
		"fallback": "icon-park:instagram",
	});
}

export default Component;
