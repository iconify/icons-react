import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no30vsbzx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no30vsbzx"/>`,
		"fallback": "fluent-mdl2:double-chevron-up-8",
	});
}

export default Component;
