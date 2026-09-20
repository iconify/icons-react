import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czy80m__f.css';
import '../../css/o/o94urebay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czy80m__f"/><path class="o94urebay"/>`,
		"fallback": "selfhst:deployrr",
	});
}

export default Component;
