import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/spu85samc.css';
import '../../css/g/g0frtbcqz.css';
import '../../css/f/f2_9c4brj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="spu85samc"/><path class="g0frtbcqz"/><path class="f2_9c4brj"/></g>`,
		"fallback": "icon-park:association",
	});
}

export default Component;
