import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjf9-p5gg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjf9-p5gg"/>`,
		"fallback": "mingcute:book-5-fill",
	});
}

export default Component;
