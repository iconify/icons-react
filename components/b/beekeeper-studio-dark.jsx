import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umr1o5bgm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umr1o5bgm"/>`,
		"fallback": "selfhst:beekeeper-studio-dark",
	});
}

export default Component;
