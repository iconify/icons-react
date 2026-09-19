import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcjzqc7he.css';

const viewBox = {"width":36,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcjzqc7he"/>`,
		"fallback": "et:bargraph",
	});
}

export default Component;
