import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lipx2eb1r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lipx2eb1r"/>`,
		"fallback": "cib:gitlab",
	});
}

export default Component;
