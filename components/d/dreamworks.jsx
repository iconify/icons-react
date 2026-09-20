import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckfu-yb4f.css';

const viewBox = {"width":300,"height":38.978};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckfu-yb4f"/>`,
		"fallback": "thesvg-color:dreamworks",
	});
}

export default Component;
