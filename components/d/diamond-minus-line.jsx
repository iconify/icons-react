import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcn5b1kkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcn5b1kkm"/>`,
		"fallback": "mingcute:diamond-minus-line",
	});
}

export default Component;
