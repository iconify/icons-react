import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk9jk_8nt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk9jk_8nt"/>`,
		"fallback": "whh:circlevimeo",
	});
}

export default Component;
