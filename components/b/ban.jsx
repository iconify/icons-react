import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wle5_hbiv.css';

const viewBox = {"width":1536,"height":1568};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wle5_hbiv"/>`,
		"fallback": "fa:ban",
	});
}

export default Component;
