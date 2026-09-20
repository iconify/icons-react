import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/f/fnv3fzuqn.css';
import '../../css/k/kbth6eboe.css';
import '../../css/a/a3a7kvl8j.css';
import '../../css/n/n9j0meb9v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="fnv3fzuqn"/><path class="kbth6eboe"/><path class="a3a7kvl8j"/><path class="n9j0meb9v"/></g>`,
		"fallback": "streamline-plump-color:attribution",
	});
}

export default Component;
