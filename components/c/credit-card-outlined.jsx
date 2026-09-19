import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijc_7ccrx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijc_7ccrx"/>`,
		"fallback": "ant-design:credit-card-outlined",
	});
}

export default Component;
