import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/c/cua491bzg.css';
import '../../css/a/a81ieccto.css';
import '../../css/p/py3rz6x2s.css';
import '../../css/w/weul5oicp.css';
import '../../css/r/redndiulz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="cua491bzg"/><path class="a81ieccto"/><path class="py3rz6x2s"/><path class="weul5oicp"/><path class="redndiulz"/></g>`,
		"fallback": "icon-park:electronic-locks-close",
	});
}

export default Component;
