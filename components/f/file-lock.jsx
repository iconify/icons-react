import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/euce6ob-r.css';
import '../../css/p/pv2ur-63o.css';
import '../../css/g/g5hy-mctw.css';
import '../../css/m/m5sohd5zt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="euce6ob-r"/><path class="pv2ur-63o"/><rect class="g5hy-mctw"/><path class="m5sohd5zt"/></g>`,
		"fallback": "icon-park:file-lock",
	});
}

export default Component;
