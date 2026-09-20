import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k7ipa6byr.css';
import '../../css/f/fxuycklnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k7ipa6byr"/><path class="fxuycklnx"/></g>`,
		"fallback": "reicon:cloud-file",
	});
}

export default Component;
