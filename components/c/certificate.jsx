import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9t6jjbyp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9t6jjbyp"/>`,
		"fallback": "fluent-mdl2:certificate",
	});
}

export default Component;
