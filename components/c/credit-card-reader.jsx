import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yy4tgoh5v.css';
import '../../css/z/zc97s3rju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yy4tgoh5v"/><path class="zc97s3rju"/></g>`,
		"fallback": "vadivam:credit-card-reader",
	});
}

export default Component;
