import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq0mgtbmu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq0mgtbmu"/>`,
		"fallback": "selfhst:bitvoker-dark",
	});
}

export default Component;
