import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewbnvrb4j.css';
import '../../css/a/a0qwh727o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewbnvrb4j"/><path class="a0qwh727o"/>`,
		"fallback": "carbon:image",
	});
}

export default Component;
