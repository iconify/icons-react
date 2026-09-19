import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0p4c2bpp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0p4c2bpp"/>`,
		"fallback": "ant-design:fund-fill",
	});
}

export default Component;
