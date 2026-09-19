import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/m/ma5ivp-0g.css';
import '../../css/m/mp5ioowxd.css';
import '../../css/f/fzg-l0b9g.css';
import '../../css/v/vy9t1lb6t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="ma5ivp-0g"/><path class="mp5ioowxd"/><path class="fzg-l0b9g"/><path class="vy9t1lb6t"/></g>`,
		"fallback": "icon-park:devices",
	});
}

export default Component;
