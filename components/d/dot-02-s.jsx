import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqb3qcc7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqb3qcc7w"/>`,
		"fallback": "ci:dot-02-s",
	});
}

export default Component;
