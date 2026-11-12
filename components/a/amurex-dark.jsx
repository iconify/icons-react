import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzbinlt2s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzbinlt2s"/>`,
		"fallback": "selfhst:amurex-dark",
	});
}

export default Component;
