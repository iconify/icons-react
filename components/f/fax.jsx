import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb-ihib-e.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb-ihib-e"/>`,
		"fallback": "fluent-mdl2:fax",
	});
}

export default Component;
