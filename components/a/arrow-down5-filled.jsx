import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aegl_7xqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aegl_7xqs"/>`,
		"fallback": "reicon:arrow-down5-filled",
	});
}

export default Component;
