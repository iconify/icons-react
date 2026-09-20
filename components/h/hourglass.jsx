import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/anqhr6b6d.css';
import '../../css/p/pif7w1bsh.css';
import '../../css/c/cp1a-t86s.css';
import '../../css/d/dbaetmxnx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="anqhr6b6d"/><path class="pif7w1bsh"/><path class="cp1a-t86s"/><path class="dbaetmxnx"/></g>`,
		"fallback": "streamline-plump-color:hourglass",
	});
}

export default Component;
