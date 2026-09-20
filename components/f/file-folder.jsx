import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hqm44lbxi.css';
import '../../css/f/f8nk3lbvk.css';
import '../../css/d/drrbb3b5y.css';
import '../../css/s/sgxn03bzc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="hqm44lbxi"/><path class="f8nk3lbvk"/><path class="drrbb3b5y"/><path class="sgxn03bzc"/></g>`,
		"fallback": "streamline-plump-color:file-folder",
	});
}

export default Component;
