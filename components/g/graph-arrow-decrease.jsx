import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/r/rjm7y25ow.css';
import '../../css/d/dy2h7dbih.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="rjm7y25ow"/><path class="dy2h7dbih"/></g>`,
		"fallback": "streamline-color:graph-arrow-decrease",
	});
}

export default Component;
