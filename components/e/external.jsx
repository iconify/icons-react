import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml1d8i_dw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml1d8i_dw"/>`,
		"fallback": "bytesize:external",
	});
}

export default Component;
