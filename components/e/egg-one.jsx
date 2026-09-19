import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nb0ci_ujs.css';
import '../../css/k/kdubn7zbs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="nb0ci_ujs"/><path class="kdubn7zbs"/></g>`,
		"fallback": "icon-park-solid:egg-one",
	});
}

export default Component;
