import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag8av007b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag8av007b"/>`,
		"fallback": "mingcute:entrance-line",
	});
}

export default Component;
