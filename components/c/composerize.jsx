import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bggzpxb-r.css';
import '../../css/v/v-7fu2bmn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bggzpxb-r"/><path class="v-7fu2bmn"/>`,
		"fallback": "selfhst:composerize",
	});
}

export default Component;
