import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utt_0ki8c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utt_0ki8c"/>`,
		"fallback": "ix:explore",
	});
}

export default Component;
