import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja0nf1bzs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja0nf1bzs"/>`,
		"fallback": "codex:brackets-vertical",
	});
}

export default Component;
