import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj7790gly.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj7790gly"/>`,
		"fallback": "ix:data-type-string",
	});
}

export default Component;
