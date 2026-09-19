import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2i9q5xnv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2i9q5xnv"/>`,
		"fallback": "cib:creative-commons-sa",
	});
}

export default Component;
