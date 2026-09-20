import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z05t5g99i.css';
import '../../css/u/u9rfsfb5b.css';
import '../../css/h/hm5c2097h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z05t5g99i"/><path class="u9rfsfb5b"/><path class="hm5c2097h"/></g>`,
		"fallback": "vadivam:atom",
	});
}

export default Component;
