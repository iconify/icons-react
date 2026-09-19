import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqqtwhrrx.css';
import '../../css/z/zgm2r3bvm.css';
import '../../css/n/nm2dyfd2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqqtwhrrx"/><path class="zgm2r3bvm"/><path class="nm2dyfd2s"/>`,
		"fallback": "bxl:buy-me-a-coffee",
	});
}

export default Component;
