import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khjp1zboe.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khjp1zboe"/>`,
		"fallback": "f7:ant-fill",
	});
}

export default Component;
