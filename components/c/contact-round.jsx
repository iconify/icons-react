import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b2w79fbyh.css';
import '../../css/p/p839x-bnc.css';
import '../../css/e/eaj-j_bjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b2w79fbyh"/><path class="p839x-bnc"/><path class="eaj-j_bjx"/></g>`,
		"fallback": "vadivam:contact-round",
	});
}

export default Component;
