import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h05gu1dch.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h05gu1dch"/>`,
		"fallback": "ant-design:html5-outlined",
	});
}

export default Component;
