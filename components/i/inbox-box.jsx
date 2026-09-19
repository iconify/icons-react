import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkt6sx4xs.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkt6sx4xs"/>`,
		"fallback": "el:inbox-box",
	});
}

export default Component;
