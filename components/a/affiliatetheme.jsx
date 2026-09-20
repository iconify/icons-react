import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s03c0fb4j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s03c0fb4j"/>`,
		"fallback": "la:affiliatetheme",
	});
}

export default Component;
