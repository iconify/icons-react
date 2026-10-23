import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a_33vdbgo.css';
import '../../css/x/xpcr8zb5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a_33vdbgo"/><path class="xpcr8zb5b"/></g>`,
		"fallback": "vadivam:git-compare",
	});
}

export default Component;
