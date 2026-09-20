import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6dv257kq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c6dv257kq"/>`,
		"fallback": "streamline-flex:hierarchy-16-solid",
	});
}

export default Component;
