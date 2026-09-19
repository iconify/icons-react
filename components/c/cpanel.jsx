import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6br34_0f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6br34_0f"/>`,
		"fallback": "cib:cpanel",
	});
}

export default Component;
