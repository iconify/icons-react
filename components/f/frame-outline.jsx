import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b19yjd4da.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b19yjd4da"/>`,
		"fallback": "teenyicons:frame-outline",
	});
}

export default Component;
