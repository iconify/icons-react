import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyb2rnbco.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyb2rnbco"/>`,
		"fallback": "carbon:code-hide",
	});
}

export default Component;
