import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzfzg9b7u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzfzg9b7u"/>`,
		"fallback": "teenyicons:arrow-right-small-outline",
	});
}

export default Component;
