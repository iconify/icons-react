import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zljs9gavt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zljs9gavt"/>`,
		"fallback": "mingcute:cigarette-off-line",
	});
}

export default Component;
