import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/y/ycsgqlbpq.css';
import '../../css/b/brmmwgb3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="ycsgqlbpq"/><path class="brmmwgb3i"/></g>`,
		"fallback": "icon-park-outline:bread",
	});
}

export default Component;
