import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/giby68ztq.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="giby68ztq"/>`,
		"fallback": "ps:cloud",
	});
}

export default Component;
