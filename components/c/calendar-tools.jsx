import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfsv8v-qt.css';
import '../../css/t/teb2t72mt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfsv8v-qt"/><path class="teb2t72mt"/>`,
		"fallback": "carbon:calendar-tools",
	});
}

export default Component;
