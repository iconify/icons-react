import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8msorzgx.css';
import '../../css/w/wpiedsuzc.css';
import '../../css/p/p725vzbaj.css';
import '../../css/z/zf0l2oqao.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p8msorzgx"/><path clip-rule="evenodd" class="wpiedsuzc"/><path class="p725vzbaj"/><path class="zf0l2oqao"/></g>`,
		"fallback": "streamline-color:flower-alt",
	});
}

export default Component;
