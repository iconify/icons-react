import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/v4xg0tb8o.css';
import '../../css/q/ql7zt9ofm.css';
import '../../css/g/gfdmcpb1m.css';
import '../../css/k/kzxm2abij.css';
import '../../css/j/jzuxsw-pi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="v4xg0tb8o"/><path class="ql7zt9ofm"/><path class="gfdmcpb1m"/><path class="kzxm2abij"/><path class="jzuxsw-pi"/></g>`,
		"fallback": "streamline-plump-color:broken-link-2",
	});
}

export default Component;
