import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/o/oy00sfc0r.css';
import '../../css/p/p6tkzij8z.css';
import '../../css/g/gr7996bbx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="oy00sfc0r"/><path class="p6tkzij8z"/><path class="gr7996bbx"/></g>`,
		"fallback": "icon-park-outline:dashboard",
	});
}

export default Component;
