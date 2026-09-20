import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/ij98ji3ho.css';
import '../../css/r/rc4gxnxlt.css';
import '../../css/q/qsbib5l9t.css';
import '../../css/a/aj21x-b7i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ij98ji3ho"/><path class="rc4gxnxlt"/><path class="qsbib5l9t"/><path class="aj21x-b7i"/></g>`,
		"fallback": "streamline-plump-color:building-office",
	});
}

export default Component;
