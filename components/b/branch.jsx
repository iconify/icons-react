import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/q/qkjx3xb9z.css';
import '../../css/u/ubb-9yben.css';
import '../../css/g/g4p3ogb_y.css';
import '../../css/w/wk9qljb9h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="qkjx3xb9z"/><path class="ubb-9yben"/><path class="g4p3ogb_y"/><path class="wk9qljb9h"/></g>`,
		"fallback": "icon-park:branch",
	});
}

export default Component;
