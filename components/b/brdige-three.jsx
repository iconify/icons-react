import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/ydeugkbob.css';
import '../../css/u/umtsztb2x.css';
import '../../css/f/f64a49b2p.css';
import '../../css/j/jr9v2-bwi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ydeugkbob"/><path class="umtsztb2x"/><path class="f64a49b2p"/><path class="jr9v2-bwi"/></g>`,
		"fallback": "icon-park-outline:brdige-three",
	});
}

export default Component;
