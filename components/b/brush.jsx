import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbvv7mb1x.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbvv7mb1x"/>`,
		"fallback": "el:brush",
	});
}

export default Component;
