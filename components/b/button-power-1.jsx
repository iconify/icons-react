import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/s/soaayzbjb.css';
import '../../css/g/gf0ksqbal.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="soaayzbjb"/><path class="gf0ksqbal"/></g>`,
		"fallback": "streamline-plump:button-power-1",
	});
}

export default Component;
