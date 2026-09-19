import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/z/zsoxqccwo.css';
import '../../css/l/lyoiuubza.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="zsoxqccwo"/><path class="lyoiuubza"/></g>`,
		"fallback": "icon-park-outline:code",
	});
}

export default Component;
