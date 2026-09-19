import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubm3cmbzl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubm3cmbzl"/>`,
		"fallback": "fluent-mdl2:guitar",
	});
}

export default Component;
