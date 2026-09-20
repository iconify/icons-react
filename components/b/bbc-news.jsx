import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qik18r02u.css';
import '../../css/j/jxi1ylssz.css';
import '../../css/p/p3j752dkn.css';
import '../../css/s/s01r7qvek.css';

const viewBox = {"width":400,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qik18r02u"/><path class="jxi1ylssz"/><path class="p3j752dkn"/><path class="s01r7qvek"/>`,
		"fallback": "thesvg-color:bbc-news",
	});
}

export default Component;
