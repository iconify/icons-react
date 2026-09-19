import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs0839n8x.css';
import '../../css/t/ta7x8sbgt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs0839n8x"/><path class="ta7x8sbgt"/>`,
		"fallback": "carbon:catalog-publish",
	});
}

export default Component;
