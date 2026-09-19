import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/q/qeegippin.css';
import '../../css/o/ohl-5yb2w.css';
import '../../css/m/mcsbvv71s.css';
import '../../css/k/k410_mbxq.css';
import '../../css/n/ntw0oybgo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><circle class="qeegippin"/><circle class="ohl-5yb2w"/><path class="mcsbvv71s"/><path class="k410_mbxq"/><path class="ntw0oybgo"/></g>`,
		"fallback": "icon-park:cherry",
	});
}

export default Component;
