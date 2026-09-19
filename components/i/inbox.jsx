import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1q2spo_i.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1q2spo_i"/>`,
		"fallback": "fluent-mdl2:inbox",
	});
}

export default Component;
