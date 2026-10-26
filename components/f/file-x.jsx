import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/m/mnq2p-hlq.css';
import '../../css/y/ylxq2gs_z.css';
import '../../css/p/poz_cacaw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="mnq2p-hlq"/><path class="ylxq2gs_z"/><path class="poz_cacaw"/></g>`,
		"fallback": "doodle-icons:file-x",
	});
}

export default Component;
