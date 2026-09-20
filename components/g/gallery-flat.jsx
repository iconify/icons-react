import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mp-cvccnn.css';
import '../../css/n/n3igo1b3e.css';
import '../../css/j/jjdo8bbzh.css';
import '../../css/k/k8t1yyboi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mp-cvccnn"/><path clip-rule="evenodd" class="n3igo1b3e"/><path clip-rule="evenodd" class="jjdo8bbzh"/><path class="k8t1yyboi"/></g>`,
		"fallback": "streamline-flex-color:gallery-flat",
	});
}

export default Component;
