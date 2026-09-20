import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fat3zh_ka.css';
import '../../css/p/pj0wk54iz.css';
import '../../css/p/pzqhllcuo.css';
import '../../css/b/b2v1umb_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fat3zh_ka"/><path class="pj0wk54iz"/><path class="pzqhllcuo"/><path class="b2v1umb_q"/>`,
		"fallback": "selfhst:discopanel",
	});
}

export default Component;
