import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0tkz4joq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0tkz4joq"/>`,
		"fallback": "tdesign:city-ancient-1-filled",
	});
}

export default Component;
