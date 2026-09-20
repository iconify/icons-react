import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy_9-78me.css';
import '../../css/k/kmix8d4jl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy_9-78me"/><path class="kmix8d4jl"/>`,
		"fallback": "tdesign:architecture-hui-style-filled",
	});
}

export default Component;
