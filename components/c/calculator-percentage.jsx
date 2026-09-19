import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnhai55oa.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnhai55oa"/>`,
		"fallback": "fluent-mdl2:calculator-percentage",
	});
}

export default Component;
