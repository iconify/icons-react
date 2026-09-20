import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kei2h4l7k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kei2h4l7k"/>`,
		"fallback": "teenyicons:border-none-outline",
	});
}

export default Component;
