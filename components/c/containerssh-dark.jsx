import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb5bgx25v.css';
import '../../css/a/az6xitzef.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb5bgx25v"/><path class="az6xitzef"/>`,
		"fallback": "selfhst:containerssh-dark",
	});
}

export default Component;
