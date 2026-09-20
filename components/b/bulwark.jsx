import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhkpltbkn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhkpltbkn"/>`,
		"fallback": "selfhst:bulwark",
	});
}

export default Component;
