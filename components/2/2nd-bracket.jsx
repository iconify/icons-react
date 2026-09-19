import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3b3ih1nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3b3ih1nk"/>`,
		"fallback": "hugeicons:2nd-bracket",
	});
}

export default Component;
