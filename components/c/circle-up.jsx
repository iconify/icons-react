import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thm-z9rlg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thm-z9rlg"/>`,
		"fallback": "ci:circle-up",
	});
}

export default Component;
