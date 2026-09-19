import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/g/gj7mgbb6o.css';
import '../../css/d/dwjj-xavx.css';
import '../../css/n/nhqcy2b9w.css';
import '../../css/v/vujj_bc1c.css';
import '../../css/x/xjfnb9n4w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="gj7mgbb6o"/><path class="dwjj-xavx"/><path class="nhqcy2b9w"/><path class="vujj_bc1c"/><path class="xjfnb9n4w"/></g>`,
		"fallback": "icon-park:exchange-three",
	});
}

export default Component;
