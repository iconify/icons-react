import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncirv0fnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncirv0fnt"/>`,
		"fallback": "mingcute:clock-alert-line",
	});
}

export default Component;
