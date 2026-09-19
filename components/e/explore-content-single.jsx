import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oypkz5_qd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oypkz5_qd"/>`,
		"fallback": "fluent-mdl2:explore-content-single",
	});
}

export default Component;
