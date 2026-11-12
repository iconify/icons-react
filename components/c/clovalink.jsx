import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anh9su9vt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anh9su9vt"/>`,
		"fallback": "selfhst:clovalink",
	});
}

export default Component;
