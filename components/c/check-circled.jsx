import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev4r-7fft.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev4r-7fft"/>`,
		"fallback": "radix-icons:check-circled",
	});
}

export default Component;
