import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-f8hredq.css';
import '../../css/c/c0k_mybxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-f8hredq"/><path class="c0k_mybxg"/>`,
		"fallback": "tdesign:ai-book-open-filled",
	});
}

export default Component;
