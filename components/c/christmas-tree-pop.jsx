import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rtlo3vb9m.css';
import '../../css/k/kgm_ocjyh.css';
import '../../css/l/l50hzgbne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rtlo3vb9m"/><path clip-rule="evenodd" class="kgm_ocjyh"/><path clip-rule="evenodd" class="l50hzgbne"/></g>`,
		"fallback": "streamline-kameleon-color:christmas-tree-pop",
	});
}

export default Component;
