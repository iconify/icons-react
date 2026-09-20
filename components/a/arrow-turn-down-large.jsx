import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qn96kulft.css';
import '../../css/y/yicma6b6o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="qn96kulft"/><path class="yicma6b6o"/></g>`,
		"fallback": "streamline-plump-color:arrow-turn-down-large",
	});
}

export default Component;
