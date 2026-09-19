import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl2e97jtx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl2e97jtx"/>`,
		"fallback": "carbon:infinity",
	});
}

export default Component;
