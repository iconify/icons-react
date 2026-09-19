import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo6c3-5uk.css';
import '../../css/t/t9axjb05q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo6c3-5uk"/><path class="t9axjb05q"/>`,
		"fallback": "carbon:enumeration-definition",
	});
}

export default Component;
