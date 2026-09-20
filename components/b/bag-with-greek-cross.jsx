import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8befvb3w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8befvb3w"/>`,
		"fallback": "pinhead:bag-with-greek-cross",
	});
}

export default Component;
