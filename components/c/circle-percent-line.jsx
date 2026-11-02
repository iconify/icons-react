import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yve9znfxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yve9znfxe"/>`,
		"fallback": "mingcute:circle-percent-line",
	});
}

export default Component;
