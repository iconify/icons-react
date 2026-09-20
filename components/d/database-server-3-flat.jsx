import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uuxhctyax.css';
import '../../css/a/aexv_sc4a.css';
import '../../css/a/aw43z7uas.css';
import '../../css/h/h2um-nb9c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uuxhctyax"/><path class="aexv_sc4a"/><path clip-rule="evenodd" class="aw43z7uas"/><path class="h2um-nb9c"/></g>`,
		"fallback": "streamline-plump-color:database-server-3-flat",
	});
}

export default Component;
