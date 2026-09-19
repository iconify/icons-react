import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/ujlqtjraf.css';
import '../../css/b/b7xcik0eh.css';
import '../../css/i/i499bq7-i.css';
import '../../css/d/dyisvyq3k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ujlqtjraf"/><path class="b7xcik0eh"/><rect class="i499bq7-i"/><path class="dyisvyq3k"/></g>`,
		"fallback": "icon-park-outline:bee",
	});
}

export default Component;
