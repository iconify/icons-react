import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/h/hyyx19bjl.css';
import '../../css/w/w9aixnb4p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="hyyx19bjl"/><path class="w9aixnb4p"/></g>`,
		"fallback": "icon-park-solid:horizontally-centered",
	});
}

export default Component;
