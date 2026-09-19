import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/z2qxq_b6e.css';
import '../../css/h/h7rw0qb7p.css';
import '../../css/y/ymv5tjb5q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="z2qxq_b6e"/><path class="h7rw0qb7p"/><path class="ymv5tjb5q"/></g>`,
		"fallback": "icon-park:exclusive-gateway",
	});
}

export default Component;
