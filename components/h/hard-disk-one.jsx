import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/p/p-3d8dotc.css';
import '../../css/g/gvoviy8eg.css';
import '../../css/d/db_wt-b_q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="p-3d8dotc"/><path class="gvoviy8eg"/><path class="db_wt-b_q"/></g>`,
		"fallback": "icon-park-solid:hard-disk-one",
	});
}

export default Component;
