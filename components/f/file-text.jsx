import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fgi1k7b9i.css';
import '../../css/k/k7ipa6byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fgi1k7b9i"/><path class="k7ipa6byr"/></g>`,
		"fallback": "reicon:file-text",
	});
}

export default Component;
