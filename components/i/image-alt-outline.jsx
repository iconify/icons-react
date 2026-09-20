import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr827abeq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr827abeq"/>`,
		"fallback": "teenyicons:image-alt-outline",
	});
}

export default Component;
