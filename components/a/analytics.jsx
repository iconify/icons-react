import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwwl4pngj.css';
import '../../css/c/c7npnxbfc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwwl4pngj"/><path class="c7npnxbfc"/>`,
		"fallback": "carbon:analytics",
	});
}

export default Component;
