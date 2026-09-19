import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mco94iian.css';
import '../../css/b/b7xcik0eh.css';
import '../../css/g/g7668_b1z.css';
import '../../css/d/dyisvyq3k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="mco94iian"/><path class="b7xcik0eh"/><rect class="g7668_b1z"/><path class="dyisvyq3k"/></g>`,
		"fallback": "icon-park-solid:bee",
	});
}

export default Component;
