import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epaa86_qq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epaa86_qq"/>`,
		"fallback": "selfhst:heroku-light",
	});
}

export default Component;
