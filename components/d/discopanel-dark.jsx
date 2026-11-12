import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udlhghb8a.css';
import '../../css/j/jmgoldbbr.css';
import '../../css/w/w3_bhfbqa.css';
import '../../css/b/b2v1umb_q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udlhghb8a"/><path class="jmgoldbbr"/><path class="w3_bhfbqa"/><path class="b2v1umb_q"/>`,
		"fallback": "selfhst:discopanel-dark",
	});
}

export default Component;
