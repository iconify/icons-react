import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxth2iboa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxth2iboa"/>`,
		"fallback": "carbon:chart-relationship",
	});
}

export default Component;
