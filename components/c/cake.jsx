import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he0c_3b2u.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he0c_3b2u"/>`,
		"fallback": "fluent-mdl2:cake",
	});
}

export default Component;
