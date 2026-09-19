import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/epr703v6w.css';
import '../../css/h/h8t75bbcu.css';
import '../../css/m/mjtgadbkn.css';
import '../../css/n/nmcxl3q8j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="epr703v6w"/><path class="h8t75bbcu"/><path class="mjtgadbkn"/><path class="nmcxl3q8j"/></g>`,
		"fallback": "icon-park-outline:cruise",
	});
}

export default Component;
