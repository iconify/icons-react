import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbiso1wff.css';
import '../../css/y/yhignzrec.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbiso1wff"/><path class="yhignzrec"/>`,
		"fallback": "carbon:chart-evaluation",
	});
}

export default Component;
