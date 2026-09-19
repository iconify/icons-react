import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5erfebgx.css';
import '../../css/a/alv0vrx0a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5erfebgx"/><path class="alv0vrx0a"/>`,
		"fallback": "carbon:data-base-alt",
	});
}

export default Component;
