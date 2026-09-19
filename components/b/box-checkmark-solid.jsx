import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdeqh2bsb.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdeqh2bsb"/>`,
		"fallback": "fluent-mdl2:box-checkmark-solid",
	});
}

export default Component;
