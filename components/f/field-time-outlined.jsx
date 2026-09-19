import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcb3-fmrh.css';
import '../../css/w/w74cijboi.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcb3-fmrh"/><path class="w74cijboi"/>`,
		"fallback": "ant-design:field-time-outlined",
	});
}

export default Component;
