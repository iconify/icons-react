import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9iirbbwd.css';

const viewBox = {"width":1024,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9iirbbwd"/>`,
		"fallback": "simple-line-icons:envelope",
	});
}

export default Component;
