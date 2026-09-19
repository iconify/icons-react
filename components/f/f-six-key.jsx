import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/n03w5kbkh.css';
import '../../css/v/v0sklzfxn.css';
import '../../css/d/dhap0cc7v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="n03w5kbkh"/><path class="v0sklzfxn"/><path class="dhap0cc7v"/></g>`,
		"fallback": "icon-park-outline:f-six-key",
	});
}

export default Component;
