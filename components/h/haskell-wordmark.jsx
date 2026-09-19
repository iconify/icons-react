import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4uddx0jd.css';
import '../../css/v/vqxzppjjv.css';
import '../../css/s/sjhg1622m.css';
import '../../css/e/e4ilxsk1q.css';
import '../../css/x/xfb9unbeh.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4uddx0jd"/><path class="vqxzppjjv"/><path class="sjhg1622m"/><path class="e4ilxsk1q"/><path class="xfb9unbeh"/>`,
		"fallback": "devicon:haskell-wordmark",
	});
}

export default Component;
