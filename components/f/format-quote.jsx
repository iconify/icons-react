import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-s3mkbpo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-s3mkbpo"/>`,
		"fallback": "dashicons:format-quote",
	});
}

export default Component;
