import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci31p8bnk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci31p8bnk"/>`,
		"fallback": "ps:clock",
	});
}

export default Component;
