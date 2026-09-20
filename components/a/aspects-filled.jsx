import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykalgvbci.css';
import '../../css/y/yn92p7rip.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ykalgvbci"/><path class="yn92p7rip"/>`,
		"fallback": "ix:aspects-filled",
	});
}

export default Component;
