import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k47yy6bqq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k47yy6bqq"/>`,
		"fallback": "radix-icons:hobby-knife",
	});
}

export default Component;
