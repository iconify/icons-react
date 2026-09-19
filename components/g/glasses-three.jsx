import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/y88yxebix.css';
import '../../css/x/xji954c1a.css';
import '../../css/d/dk0uorbci.css';
import '../../css/m/mo94rtywa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="y88yxebix"/><path class="xji954c1a"/><circle class="dk0uorbci"/><path class="mo94rtywa"/></g>`,
		"fallback": "icon-park-solid:glasses-three",
	});
}

export default Component;
