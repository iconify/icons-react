import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6n136b5p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6n136b5p"/>`,
		"fallback": "cib:adobe-typekit",
	});
}

export default Component;
