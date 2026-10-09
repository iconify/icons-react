import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otprnqk6j.css';
import '../../css/j/ja-z-qbhg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otprnqk6j"/><path class="ja-z-qbhg"/>`,
		"fallback": "energy-icons:edit-20",
	});
}

export default Component;
