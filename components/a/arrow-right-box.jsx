import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc8dxpb5u.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc8dxpb5u"/>`,
		"fallback": "memory:arrow-right-box",
	});
}

export default Component;
