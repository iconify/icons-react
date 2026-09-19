import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plrbxtq-q.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plrbxtq-q"/>`,
		"fallback": "fluent-mdl2:column-right-two-thirds-edit",
	});
}

export default Component;
