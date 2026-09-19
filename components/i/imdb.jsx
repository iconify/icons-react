import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l92m32boa.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l92m32boa"/>`,
		"fallback": "fa:imdb",
	});
}

export default Component;
