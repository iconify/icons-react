import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq462eq0m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aq462eq0m"/>`,
		"fallback": "pajamas:autoplay",
	});
}

export default Component;
