import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/euce6ob-r.css';
import '../../css/p/pv2ur-63o.css';
import '../../css/y/ykd3dub2f.css';
import '../../css/s/scik8ub2u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="euce6ob-r"/><path class="pv2ur-63o"/><circle class="ykd3dub2f"/><path class="scik8ub2u"/></g>`,
		"fallback": "icon-park:image-files",
	});
}

export default Component;
