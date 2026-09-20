import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mz7ph1gyr.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mz7ph1gyr"/>`,
		"fallback": "lineicons:highlighter-1",
	});
}

export default Component;
