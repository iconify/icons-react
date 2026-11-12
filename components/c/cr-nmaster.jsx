import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2dqk2sur.css';
import '../../css/r/rb6k0dd7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2dqk2sur"/><path class="rb6k0dd7y"/>`,
		"fallback": "selfhst:cr-nmaster",
	});
}

export default Component;
