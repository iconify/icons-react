import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec0xa6blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec0xa6blc"/>`,
		"fallback": "mingcute:burj-khalifa-tower-line",
	});
}

export default Component;
