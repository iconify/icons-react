import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x80qvwb-u.css';
import '../../css/b/b63gy5bbo.css';
import '../../css/c/c8--srbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="x80qvwb-u"/><path class="b63gy5bbo"/><path class="c8--srbre"/></g>`,
		"fallback": "hugeicons:circle-arrow-up-right-02",
	});
}

export default Component;
