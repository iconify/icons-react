import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioh76cbbc.css';
import '../../css/k/ksr3op_7i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioh76cbbc"/><path class="ksr3op_7i"/>`,
		"fallback": "carbon:direction-loop-right",
	});
}

export default Component;
