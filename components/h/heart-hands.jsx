import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4u8pbwjc.css';
import '../../css/k/k9xu8tbyg.css';
import '../../css/j/jcs05xofn.css';
import '../../css/l/la3iaobmb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="x4u8pbwjc"><path class="k9xu8tbyg"/><path class="jcs05xofn"/></g><path class="la3iaobmb"/>`,
		"fallback": "openmoji:heart-hands",
	});
}

export default Component;
