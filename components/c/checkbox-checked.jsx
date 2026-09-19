import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2nbqq6me.css';
import '../../css/k/k2czn9xff.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2nbqq6me"/><path class="k2czn9xff"/>`,
		"fallback": "carbon:checkbox-checked",
	});
}

export default Component;
