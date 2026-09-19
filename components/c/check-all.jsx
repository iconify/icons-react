import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj7ay5b0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj7ay5b0w"/>`,
		"fallback": "ci:check-all",
	});
}

export default Component;
