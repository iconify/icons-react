import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5_tzxbgo.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5_tzxbgo"/>`,
		"fallback": "f7:bolt-slash",
	});
}

export default Component;
