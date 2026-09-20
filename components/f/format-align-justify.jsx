import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q67mucbgw.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q67mucbgw"/>`,
		"fallback": "memory:format-align-justify",
	});
}

export default Component;
