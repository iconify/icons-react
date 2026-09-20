import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co3ix1bix.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="co3ix1bix"/>`,
		"fallback": "ix:info-multiple",
	});
}

export default Component;
