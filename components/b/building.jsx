import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyko8xbqi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyko8xbqi"/>`,
		"fallback": "fa7-regular:building",
	});
}

export default Component;
