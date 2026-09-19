import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bayoh_bgk.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bayoh_bgk"/>`,
		"fallback": "ant-design:gift-fill",
	});
}

export default Component;
