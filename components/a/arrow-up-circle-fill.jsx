import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tblqz5ecg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tblqz5ecg"/>`,
		"fallback": "mingcute:arrow-up-circle-fill",
	});
}

export default Component;
