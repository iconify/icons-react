import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3u369zeg.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3u369zeg"/>`,
		"fallback": "whh:halflife",
	});
}

export default Component;
