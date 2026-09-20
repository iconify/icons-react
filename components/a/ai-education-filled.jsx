import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcek26bpu.css';
import '../../css/p/p__5xsbkk.css';
import '../../css/y/ysrizo7oy.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcek26bpu"/><path class="p__5xsbkk"/><path class="ysrizo7oy"/>`,
		"fallback": "tdesign:ai-education-filled",
	});
}

export default Component;
