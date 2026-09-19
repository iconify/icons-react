import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/f/fvdzt3gko.css';
import '../../css/c/cf9111btq.css';
import '../../css/t/t7r4q8bkq.css';
import '../../css/c/cnhoddn-u.css';
import '../../css/n/noggrib5f.css';
import '../../css/w/w6ev0zvwv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="fvdzt3gko"/><path class="cf9111btq"/><path class="t7r4q8bkq"/><path class="cnhoddn-u"/><path class="noggrib5f"/><path class="w6ev0zvwv"/></g>`,
		"fallback": "icon-park:chest",
	});
}

export default Component;
