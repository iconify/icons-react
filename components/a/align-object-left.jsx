import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/fur303b7v.css';
import '../../css/w/wcgy9d5wr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="fur303b7v"/><path class="wcgy9d5wr"/></g>`,
		"fallback": "streamline-plump:align-object-left",
	});
}

export default Component;
