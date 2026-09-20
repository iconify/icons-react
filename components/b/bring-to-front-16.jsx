import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy9w8ibxy.css';
import '../../css/a/a_0finyys.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy9w8ibxy"/><path class="a_0finyys"/>`,
		"fallback": "qlementine-icons:bring-to-front-16",
	});
}

export default Component;
