import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6ky_ifzk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6ky_ifzk"/>`,
		"fallback": "fluent-mdl2:insert-signature-line",
	});
}

export default Component;
