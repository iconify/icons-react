import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v67vhyu1w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v67vhyu1w"/>`,
		"fallback": "ix:chevron-up-bar-small",
	});
}

export default Component;
