import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eme4c3hbl.css';
import '../../css/g/grjaxzi4b.css';
import '../../css/n/nk07rpvti.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="eme4c3hbl"/><path class="grjaxzi4b"/><path class="nk07rpvti"/></g>`,
		"fallback": "icon-park-solid:door-handle",
	});
}

export default Component;
