import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_5i6l4fk.css';
import '../../css/l/lrz954bus.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_5i6l4fk"/><path class="lrz954bus"/>`,
		"fallback": "streamline-pixel:ecology-tree",
	});
}

export default Component;
