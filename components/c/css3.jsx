import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3sh27b1i.css';
import '../../css/w/wln7gbc4q.css';
import '../../css/b/bk_8nxb5u.css';
import '../../css/i/iswi7r7vs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3sh27b1i"/><path class="wln7gbc4q"/><path class="bk_8nxb5u"/><path class="iswi7r7vs"/>`,
		"fallback": "selfhst:css3",
	});
}

export default Component;
