import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxhj9lv9j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zxhj9lv9j"/>`,
		"fallback": "healthicons:chart-line2x-outline",
	});
}

export default Component;
