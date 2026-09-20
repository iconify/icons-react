import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqtc13b7i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xqtc13b7i"/>`,
		"fallback": "streamline:hotel-one-star-solid",
	});
}

export default Component;
