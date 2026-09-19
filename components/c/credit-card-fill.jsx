import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkv7bfbje.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkv7bfbje"/>`,
		"fallback": "ant-design:credit-card-fill",
	});
}

export default Component;
