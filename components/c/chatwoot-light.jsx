import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs3w2zbwd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gs3w2zbwd"/>`,
		"fallback": "selfhst:chatwoot-light",
	});
}

export default Component;
