import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/e1fnlelix.css';
import '../../css/q/qatdem52d.css';
import '../../css/y/yae4tz53t.css';
import '../../css/s/szq7p_bjb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="e1fnlelix"/><path class="qatdem52d"/><path class="yae4tz53t"/><path class="szq7p_bjb"/></g>`,
		"fallback": "streamline-plump-color:compass-navigator",
	});
}

export default Component;
