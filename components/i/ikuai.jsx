import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df-4nqnau.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df-4nqnau"/>`,
		"fallback": "selfhst:ikuai",
	});
}

export default Component;
