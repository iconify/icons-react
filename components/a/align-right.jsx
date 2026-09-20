import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f3r6jjb4a.css';
import '../../css/e/eqzfz0yto.css';
import '../../css/z/zl639mb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f3r6jjb4a"/><rect class="eqzfz0yto"/><rect class="zl639mb9w"/></g>`,
		"fallback": "majesticons:align-right",
	});
}

export default Component;
