import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xyxefdb9k.css';
import '../../css/c/csxsy-bui.css';
import '../../css/p/p6ql47bdu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xyxefdb9k"/><path class="csxsy-bui"/><path class="p6ql47bdu"/></g>`,
		"fallback": "streamline-flex-color:dice-5",
	});
}

export default Component;
