import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/h/h9_05fbcs.css';
import '../../css/g/glxmc61cx.css';
import '../../css/o/oyq6rjbox.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><circle class="h9_05fbcs"/><path class="glxmc61cx"/><path class="oyq6rjbox"/></g>`,
		"fallback": "icon-park-outline:baby-one",
	});
}

export default Component;
