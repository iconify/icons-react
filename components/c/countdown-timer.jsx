import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt1np09fu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt1np09fu"/>`,
		"fallback": "radix-icons:countdown-timer",
	});
}

export default Component;
