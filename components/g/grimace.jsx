import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auxx8in_l.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auxx8in_l"/>`,
		"fallback": "fa-solid:grimace",
	});
}

export default Component;
