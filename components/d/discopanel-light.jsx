import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmf4webcc.css';
import '../../css/n/ngr5oebfg.css';
import '../../css/a/a8noj8_gi.css';
import '../../css/g/g38ac68gp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmf4webcc"/><path class="ngr5oebfg"/><path class="a8noj8_gi"/><path class="g38ac68gp"/>`,
		"fallback": "selfhst:discopanel-light",
	});
}

export default Component;
