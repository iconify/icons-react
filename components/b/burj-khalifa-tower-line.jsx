import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao5ewccyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao5ewccyh"/>`,
		"fallback": "mingcute:burj-khalifa-tower-line",
	});
}

export default Component;
