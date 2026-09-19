import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kfepth7eb.css';
import '../../css/p/p6mtntqqp.css';
import '../../css/a/ado31tecw.css';
import '../../css/c/cza-liuqy.css';
import '../../css/f/fcau486fn.css';
import '../../css/x/x-2730s8a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="kfepth7eb"/><path class="p6mtntqqp"/><path class="ado31tecw"/><path class="cza-liuqy"/><path class="fcau486fn"/><path clip-rule="evenodd" class="x-2730s8a"/></g>`,
		"fallback": "icon-park-outline:heavy-metal",
	});
}

export default Component;
