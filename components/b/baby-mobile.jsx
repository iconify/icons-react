import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/m-w6wgbel.css';
import '../../css/e/e0ym9q64n.css';
import '../../css/h/hynvvbbxd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="m-w6wgbel"/><circle class="e0ym9q64n"/><path class="hynvvbbxd"/></g>`,
		"fallback": "icon-park-outline:baby-mobile",
	});
}

export default Component;
