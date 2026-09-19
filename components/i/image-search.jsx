import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0q5nbr5o.css';
import '../../css/e/ebeqjhxfc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0q5nbr5o"/><path class="ebeqjhxfc"/>`,
		"fallback": "carbon:image-search",
	});
}

export default Component;
