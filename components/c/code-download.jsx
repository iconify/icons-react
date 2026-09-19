import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/h/h79p7xb_v.css';
import '../../css/j/jiw5t38fp.css';
import '../../css/e/ezm4tij9w.css';
import '../../css/k/kxwi57u2b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="h79p7xb_v"/><path class="jiw5t38fp"/><path class="ezm4tij9w"/><path class="kxwi57u2b"/></g>`,
		"fallback": "icon-park:code-download",
	});
}

export default Component;
