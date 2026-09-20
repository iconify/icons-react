import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzljxcb6h.css';
import '../../css/l/lugjjbc-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzljxcb6h"/><path class="lugjjbc-o"/>`,
		"fallback": "pixel:image",
	});
}

export default Component;
