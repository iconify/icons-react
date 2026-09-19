import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/a/ayfir8bht.css';
import '../../css/z/zt3vbkbuf.css';
import '../../css/g/gw08bab-f.css';
import '../../css/q/qxmsexbvt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ayfir8bht"/><path class="zt3vbkbuf"/><path class="gw08bab-f"/><path class="qxmsexbvt"/></g>`,
		"fallback": "icon-park:inbox-out",
	});
}

export default Component;
