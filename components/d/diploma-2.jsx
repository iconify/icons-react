import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz509tbyc.css';
import '../../css/y/yvlrv4bki.css';
import '../../css/m/mj4jn0bjh.css';
import '../../css/d/dmz258btd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz509tbyc"/><path class="yvlrv4bki"/><path class="mj4jn0bjh"/><path class="dmz258btd"/>`,
		"fallback": "flat-color-icons:diploma-2",
	});
}

export default Component;
