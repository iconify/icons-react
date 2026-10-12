import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca_z99bhx.css';
import '../../css/s/s38w9fbjh.css';
import '../../css/l/ldethybgr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca_z99bhx"/><path class="s38w9fbjh"/><path class="ldethybgr"/>`,
		"fallback": "energy-icons:file-audio-48",
	});
}

export default Component;
