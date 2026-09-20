import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ewo476bfp.css';
import '../../css/m/m9wq4tbly.css';
import '../../css/f/f02tp4i8e.css';
import '../../css/q/qf1rhdc9i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ewo476bfp"/><path class="m9wq4tbly"/><path class="f02tp4i8e"/><path class="qf1rhdc9i"/></g>`,
		"fallback": "streamline-flex-color:controller-stick",
	});
}

export default Component;
