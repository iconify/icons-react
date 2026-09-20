import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/op38a-bzj.css';
import '../../css/a/a0rs9ta5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="op38a-bzj"/><rect class="a0rs9ta5i"/></g>`,
		"fallback": "meteor-icons:devices",
	});
}

export default Component;
