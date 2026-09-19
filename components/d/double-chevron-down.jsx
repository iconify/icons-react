import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rek881bbh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rek881bbh"/>`,
		"fallback": "fluent-mdl2:double-chevron-down",
	});
}

export default Component;
