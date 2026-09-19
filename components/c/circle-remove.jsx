import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcl5t7bpj.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcl5t7bpj"/>`,
		"fallback": "si-glyph:circle-remove",
	});
}

export default Component;
