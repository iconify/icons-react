import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d--h3ljth.css';
import '../../css/j/j9lkrp78e.css';
import '../../css/a/a38suomnn.css';
import '../../css/d/d_jkkbcpd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="d--h3ljth"/><path class="j9lkrp78e"/><path class="a38suomnn"/><path class="d_jkkbcpd"/></g>`,
		"fallback": "streamline-plump-color:heater",
	});
}

export default Component;
