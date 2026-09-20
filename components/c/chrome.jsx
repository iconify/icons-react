import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kgng9qxjd.css';
import '../../css/i/ioti6mmec.css';
import '../../css/y/ydnrgmbdn.css';
import '../../css/j/jtsbu9bpu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kgng9qxjd"/><path class="ioti6mmec"/><path class="ydnrgmbdn"/><path class="jtsbu9bpu"/></g>`,
		"fallback": "streamline-color:chrome",
	});
}

export default Component;
