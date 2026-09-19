import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/k/k_wx8mbel.css';
import '../../css/w/wcg67ybpd.css';
import '../../css/l/l6n5orb8m.css';
import '../../css/e/e98msmb8e.css';
import '../../css/r/roc32ebme.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="k_wx8mbel"/><path class="wcg67ybpd"/><path class="l6n5orb8m"/><path class="e98msmb8e"/><path class="roc32ebme"/></g>`,
		"fallback": "icon-park:ad-product",
	});
}

export default Component;
