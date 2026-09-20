import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/ddgafj9zr.css';
import '../../css/u/ugz74ubft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ddgafj9zr"/><path class="ugz74ubft"/></g>`,
		"fallback": "solar:git-diff-bold",
	});
}

export default Component;
