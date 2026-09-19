import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9b1o0b9t.css';
import '../../css/m/mcwbb7b7p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w9b1o0b9t"/><path class="mcwbb7b7p"/>`,
		"fallback": "carbon:instance-virtual",
	});
}

export default Component;
