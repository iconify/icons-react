import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms81w8yjy.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms81w8yjy"/>`,
		"fallback": "picon:battery0",
	});
}

export default Component;
