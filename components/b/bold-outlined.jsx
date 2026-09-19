import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8ts7hg1t.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8ts7hg1t"/>`,
		"fallback": "ant-design:bold-outlined",
	});
}

export default Component;
