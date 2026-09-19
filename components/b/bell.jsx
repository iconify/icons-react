import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_7rhtb5a.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_7rhtb5a"/>`,
		"fallback": "el:bell",
	});
}

export default Component;
