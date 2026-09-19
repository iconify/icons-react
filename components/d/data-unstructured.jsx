import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0ku6lcmx.css';
import '../../css/l/lruer8ufr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0ku6lcmx"/><path class="lruer8ufr"/>`,
		"fallback": "carbon:data-unstructured",
	});
}

export default Component;
