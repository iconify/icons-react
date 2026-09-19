import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/p/p44o5vfir.css';
import '../../css/q/qeand74hw.css';
import '../../css/b/b-dm5ac4f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="p44o5vfir"/><path class="qeand74hw"/><path class="b-dm5ac4f"/></g>`,
		"fallback": "icon-park-outline:chest",
	});
}

export default Component;
