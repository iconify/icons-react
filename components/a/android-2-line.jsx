import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yszkt334k.css';
import '../../css/t/tj0901bez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yszkt334k"/><path class="tj0901bez"/>`,
		"fallback": "mingcute:android-2-line",
	});
}

export default Component;
