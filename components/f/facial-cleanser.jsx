import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/shsp_xb_i.css';
import '../../css/g/ghb_84b2f.css';
import '../../css/j/jgj6o_1pm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="shsp_xb_i"/><path class="ghb_84b2f"/><path class="jgj6o_1pm"/></g>`,
		"fallback": "icon-park-outline:facial-cleanser",
	});
}

export default Component;
