import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd189231t.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd189231t"/>`,
		"fallback": "et:download",
	});
}

export default Component;
