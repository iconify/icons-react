import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/accioub1f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="accioub1f"/>`,
		"fallback": "la:arrow-alt-circle-right-solid",
	});
}

export default Component;
