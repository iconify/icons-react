import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/put069bzd.css';

const viewBox = {"width":717,"height":666};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="put069bzd"/>`,
		"fallback": "ls:download",
	});
}

export default Component;
