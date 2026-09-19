import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qan7z0bas.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qan7z0bas"/>`,
		"fallback": "f7:arrow-up-square-fill",
	});
}

export default Component;
