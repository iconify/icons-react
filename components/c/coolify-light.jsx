import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sonzv-b6i.css';
import '../../css/y/y41okqbrh.css';
import '../../css/e/e1nqa7bmg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sonzv-b6i"/><path class="y41okqbrh"/><path class="e1nqa7bmg"/>`,
		"fallback": "selfhst:coolify-light",
	});
}

export default Component;
