import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojtv12bfi.css';
import '../../css/b/b2qas0b1a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojtv12bfi"/><path class="b2qas0b1a"/>`,
		"fallback": "carbon:accumulation-ice",
	});
}

export default Component;
