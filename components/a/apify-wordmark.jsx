import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltikhp55e.css';
import '../../css/i/i4nkalbtd.css';
import '../../css/u/uykw5abjm.css';
import '../../css/g/gfprm-lkz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltikhp55e"/><path class="i4nkalbtd"/><path class="uykw5abjm"/><path class="gfprm-lkz"/>`,
		"fallback": "devicon:apify-wordmark",
	});
}

export default Component;
