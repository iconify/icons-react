import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/x/x-23gyxcy.css';
import '../../css/a/alyo7h_ef.css';
import '../../css/p/p-vdd5bma.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="x-23gyxcy"/><path class="alyo7h_ef"/><path class="p-vdd5bma"/></g>`,
		"fallback": "icon-park:flip-vertically",
	});
}

export default Component;
