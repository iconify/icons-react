import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uoyhz65ds.css';
import '../../css/h/hnns8ybzm.css';
import '../../css/k/kcecztbwr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uoyhz65ds"/><path class="hnns8ybzm"/><path class="kcecztbwr"/></g>`,
		"fallback": "streamline-color:hand-held",
	});
}

export default Component;
