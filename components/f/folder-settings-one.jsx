import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rjn-u5bcv.css';
import '../../css/z/z018w45eb.css';
import '../../css/f/f4tcrjb5t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="rjn-u5bcv"/><circle class="z018w45eb"/><path class="f4tcrjb5t"/></g>`,
		"fallback": "icon-park-solid:folder-settings-one",
	});
}

export default Component;
