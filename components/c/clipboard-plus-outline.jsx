import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b40zu7uku.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b40zu7uku"/>`,
		"fallback": "teenyicons:clipboard-plus-outline",
	});
}

export default Component;
