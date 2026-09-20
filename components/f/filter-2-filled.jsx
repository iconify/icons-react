import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz4ladbzq.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz4ladbzq"/>`,
		"fallback": "tdesign:filter-2-filled",
	});
}

export default Component;
