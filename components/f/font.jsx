import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oov311bqt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oov311bqt"/>`,
		"fallback": "la:font",
	});
}

export default Component;
