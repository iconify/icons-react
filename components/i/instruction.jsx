import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/x/xkue7kb9l.css';
import '../../css/p/pjvfiff0q.css';
import '../../css/d/db-9zy_vl.css';
import '../../css/e/e42-6mb8q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><rect class="xkue7kb9l"/><path class="pjvfiff0q"/><path class="db-9zy_vl"/><path class="e42-6mb8q"/></g>`,
		"fallback": "icon-park-outline:instruction",
	});
}

export default Component;
