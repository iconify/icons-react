import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/b/bg8astbrt.css';
import '../../css/b/bwy4czm5u.css';
import '../../css/g/g3jivrnhg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="bg8astbrt"/><path class="bwy4czm5u"/><path class="g3jivrnhg"/></g>`,
		"fallback": "icon-park-outline:garlic",
	});
}

export default Component;
