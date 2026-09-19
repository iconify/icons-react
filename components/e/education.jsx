import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su8f1hu3j.css';
import '../../css/r/r6zc52b7f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su8f1hu3j"/><path class="r6zc52b7f"/>`,
		"fallback": "carbon:education",
	});
}

export default Component;
