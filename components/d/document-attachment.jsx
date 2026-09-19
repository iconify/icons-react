import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq7h70pom.css';
import '../../css/y/y3ymk3bab.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq7h70pom"/><path class="y3ymk3bab"/>`,
		"fallback": "carbon:document-attachment",
	});
}

export default Component;
