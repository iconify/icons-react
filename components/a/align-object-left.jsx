import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/ss8bevb4j.css';
import '../../css/s/sbkk57n0y.css';
import '../../css/c/copwssbpe.css';
import '../../css/p/pvvn03bcf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ss8bevb4j"/><path class="sbkk57n0y"/><path class="copwssbpe"/><path class="pvvn03bcf"/></g>`,
		"fallback": "streamline-plump-color:align-object-left",
	});
}

export default Component;
