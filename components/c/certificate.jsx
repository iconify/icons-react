import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjqv8bbgf.css';
import '../../css/r/rp7qrtb3b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjqv8bbgf"/><path class="rp7qrtb3b"/>`,
		"fallback": "carbon:certificate",
	});
}

export default Component;
