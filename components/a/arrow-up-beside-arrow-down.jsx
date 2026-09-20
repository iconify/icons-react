import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcm46uyti.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcm46uyti"/>`,
		"fallback": "pinhead:arrow-up-beside-arrow-down",
	});
}

export default Component;
