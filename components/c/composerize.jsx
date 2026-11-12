import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bggzpxb-r.css';
import '../../css/a/acxb7gn1s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bggzpxb-r"/><path class="acxb7gn1s"/>`,
		"fallback": "selfhst:composerize",
	});
}

export default Component;
