import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rjn-u5bcv.css';
import '../../css/p/p3qnucb9w.css';
import '../../css/y/y_awv3s8j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="rjn-u5bcv"/><circle class="p3qnucb9w"/><path class="y_awv3s8j"/></g>`,
		"fallback": "icon-park-solid:folder-search-one",
	});
}

export default Component;
