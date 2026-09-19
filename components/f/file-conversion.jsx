import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/e/euce6ob-r.css';
import '../../css/p/pv2ur-63o.css';
import '../../css/n/ndc5hcc1v.css';
import '../../css/r/rtozf_ble.css';
import '../../css/y/y7c0cl3jx.css';
import '../../css/b/bmbqn_ver.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="euce6ob-r"/><path class="pv2ur-63o"/><path class="ndc5hcc1v"/><path class="rtozf_ble"/><path class="y7c0cl3jx"/><path class="bmbqn_ver"/></g>`,
		"fallback": "icon-park:file-conversion",
	});
}

export default Component;
