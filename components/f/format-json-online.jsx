import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wur179bzw.css';
import '../../css/u/ujj8k5bff.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="wur179bzw"/><path class="ujj8k5bff"/>`,
		"fallback": "thesvg-color:format-json-online",
	});
}

export default Component;
