import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k7ipa6byr.css';
import '../../css/y/y2z-imb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k7ipa6byr"/><path class="y2z-imb0o"/></g>`,
		"fallback": "reicon:file-remove",
	});
}

export default Component;
