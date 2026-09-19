import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/e/en4rke54j.css';
import '../../css/n/n4-moed9v.css';
import '../../css/i/ijo2s9bfw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="en4rke54j"/><path class="n4-moed9v"/><rect class="ijo2s9bfw"/></g>`,
		"fallback": "icon-park:distribute-vertical-spacing",
	});
}

export default Component;
