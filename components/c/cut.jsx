import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h02y9dblq.css';

const viewBox = {"width":1792,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h02y9dblq"/>`,
		"fallback": "fa:cut",
	});
}

export default Component;
